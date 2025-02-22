import React, { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import Image from "next/image";

const Cards = ({ works }) => {
  const [stack, setStack] = useState(works);
  useEffect(() => {
    console.log(works);
  }, []);
  const handleDragEnd = (index) => {
    // Move the dragged card to the end of the stack
    const updatedStack = [...stack];
    const [movedCard] = updatedStack.splice(index, 1);
    updatedStack.push(movedCard);
    setStack(updatedStack);
  };

  return (
    <div className="flex items-center justify-center w-full h-full relative">
      {stack?.map((work, index) => (
        <DraggableCard
          key={work}
          work={work}
          works={works}
          index={index}
          onDragEnd={handleDragEnd}
          offset={index}
          rotation={index * 1.1}
          opacity={1 - index * 0.05}
        />
      ))}
    </div>
  );
};

const DraggableCard = ({
  work,
  works,
  index,
  onDragEnd,
  offset,
  rotation,
  opacity,
}) => {
  const [spring, api] = useSpring(() => ({
    x: 0,
    y: 0,
    scale: 1,
    config: { tension: 300, friction: 30 },
  }));

  const bind = useDrag(
    ({ active, movement: [mx, my], tap, last }) => {
      if (tap) return;

      api.start({
        x: active ? mx : 0,
        y: active ? my : 0,
        scale: active ? 1.1 : 1,
        rotate: active ? 12 : 0,
      });

      if (last) {
        api.start({ x: 0, y: 0, scale: 1, rotate: 0 });
        onDragEnd(index);
      }
    },
    { filterTaps: true }
  );

  return (
    <animated.div
      className={`h-20 relative overflow-hidden aspect-video grid place-items-center shadow-lg cursor-grab active:cursor-grabbing rotate-0 active:rotate-12`}
      {...bind()}
      style={{
        ...spring,
        zIndex: works.length - index,
        position: "absolute",
        transform: `translate(${offset * 10}px, ${
          offset * -10
        }px) rotate(${rotation}deg)`,
        opacity: opacity,
      }}
    >
      <Image
        src={work.image}
        height={500}
        width={500}
        alt=""
        className="h-full w-full object-cover -z-10"
      />
      <h3 className="relative z-10">{work.client}</h3>
    </animated.div>
  );
};

export default Cards;
