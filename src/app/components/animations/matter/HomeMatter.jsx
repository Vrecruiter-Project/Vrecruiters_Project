import Matter, {
  Bodies,
  Body,
  Common,
  Composite,
  Composites,
  Engine,
  Render,
  Runner,
  World,
} from "matter-js";
import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

function HomeMatter({ className, style }) {
  const scene = useRef();
  const engine = useRef(
    Engine.create({
      velocityIterations: 1,
      positionIterations: 1,
    })
  );
  const render = useRef(null);

  useEffect(() => {
    const createScene = () => {
      let cw = document.body.clientWidth;
      let ch = document.body.clientHeight;

      render.current = Render.create({
        element: scene.current,
        engine: engine.current,
        options: {
          width: cw,
          height: ch,
          wireframes: false,
          background: "transparent",
          showAngleIndicator: true,
        },
      });

      engine.current.gravity = { scale: 0.0, x: 0, y: 0 };

      Render.run(render.current);

      const runner = Runner.create();
      Runner.run(runner, engine.current);

      const stack = Composites.stack(500, 100, 10, 5, 5, 5, (x, y) => {
        const sides = Math.round(Common.random(1, 8));
        const chamfer =
          sides > 2 && Common.random() > 0.7 ? { radius: 10 } : null;

        return Common.random() < 0.8
          ? Bodies.rectangle(
              x,
              y,
              Common.random(25, 50),
              Common.random(25, 50),
              {
                chamfer,
                restitution: 1,
                friction: 0,
                frictionAir: 0,
              }
            )
          : Bodies.polygon(x, y, sides, Common.random(25, 50), {
              chamfer,
              restitution: 1,
              friction: 0,
              frictionAir: 0,
            });
      });

      Composite.add(engine.current.world, stack);

      // Transparent boundary walls
      Composite.add(engine.current.world, [
        Bodies.rectangle(cw / 2, 0, cw, 3, {
          isStatic: true,
          restitution: 1,
          render: {
            fillStyle: "transparent",
            strokeStyle: "transparent",
            lineWidth: 0,
          },
        }),
        Bodies.rectangle(cw / 2, ch, cw, 3, {
          isStatic: true,
          restitution: 1,
          render: {
            fillStyle: "transparent",
            strokeStyle: "transparent",
            lineWidth: 0,
          },
        }),
        Bodies.rectangle(0, ch / 2, 3, ch, {
          isStatic: true,
          restitution: 1,
          render: {
            fillStyle: "transparent",
            strokeStyle: "transparent",
            lineWidth: 0,
          },
        }),
        Bodies.rectangle(cw, ch / 2, 3, ch, {
          isStatic: true,
          restitution: 1,
          render: {
            fillStyle: "transparent",
            strokeStyle: "transparent",
            lineWidth: 0,
          },
        }),
      ]);

      const speed = 0.008;

      const applyForces = () => {
        stack.bodies.forEach((body) => {
          Body.applyForce(body, body.position, {
            x: Common.random(-speed, speed),
            y: Common.random(-speed, speed),
          });
        });
      };

      applyForces();

      Render.lookAt(render.current, {
        min: { x: 0, y: 0 },
        max: { x: cw, y: ch },
      });
    };

    createScene();

    const handleResize = () => {
      setTimeout(() => {
        Render.stop(render.current);

        World.clear(engine.current.world);
        Engine.clear(engine.current);

        render.current.canvas.remove();
        render.current.context = null;
        render.current.textures = {};

        createScene();
      }, 2000);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      Render.stop(render.current);
      World.clear(engine.current.world);
      Engine.clear(engine.current);
      render.current.canvas.remove();
      render.current.canvas = null;
      render.current.context = null;
      render.current.textures = {};
    };
  }, []); // Adding `isResizing` as a dependency ensures that the component responds when resizing occurs

  return <div className={className} ref={scene} style={style} />;
}

HomeMatter.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

export default HomeMatter;
