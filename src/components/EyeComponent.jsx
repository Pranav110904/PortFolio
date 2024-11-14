



import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const EyeComponent = () => {
  const eyeRef = useRef(null);
  const pathsRef = useRef([]);
  useGSAP(() => {
    if (eyeRef.current) {
      // Initialize pathsRef once the component mounts
      pathsRef.current = Array.from(eyeRef.current.querySelectorAll('path'));
    }
  }, [eyeRef]);

  useGSAP(() => {
    const paths = pathsRef.current;
    const scalePattern = [0.4, 0.9, 0.8, 0.9, 0.6, 0.9, 0.7, 0.9, 0.6, 0.9, 0.4];

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".eye",
        start: "top 150%",
        end: "bottom top",
        scrub: true,
        // Set to false if not needed in production
      },
    });

    tl.to(eyeRef.current, {
      rotation: 180,
    });

    const arrowTl = gsap.timeline({
      repeat: -1,
      repeatDelay: 0,
    });

    arrowTl.to(
      paths,
      {
        transformOrigin: "center",
        scale: (i) => scalePattern[i % scalePattern.length],
        duration: 0.5,
        stagger: {
          each: 0.1,
          repeat: -1,
          yoyo: true,
          repeatDelay: 1,
        },
      },
      0
    );
  }, []); // Empty dependency array to run once on mount

  return (
    <div className='overflow-hidden bg-[#09090B] flex justify-center items-center'>
      <section></section>
      <section className="min-h-[65dvh] flex flex-col justify-center items-center">
        <div className="relative inline-block eye" >
          <figure className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 m-0 w-full max-w-[80.7%] z-10">
            <img src="https://raw.githubusercontent.com/yasingencnet/herewegoagain/main/eye-illustration-3.png" alt="eye illustration" className="w-full h-auto object-scale-down" />
          </figure>

          <svg width="632" height="632" viewBox="0 0 632 632" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full " ref={eyeRef}>
          <path fillRule="evenodd" clipRule="evenodd" d="M133.132 68.4483L131.531 68.2309L132.794 58.6504L142.252 60.5987L141.93 62.1767L135.596 60.8705L290.174 278.302L288.544 279.461L133.97 62.0349L133.132 68.4483Z" fill="#00FFAB" />
      <path fillRule="evenodd" clipRule="evenodd" d="M187.153 36.4699L185.633 35.9385L188.802 26.8008L197.673 30.633L197.037 32.1143L191.1 29.5494L298.472 273.826L296.641 274.63L189.27 30.3557L187.153 36.4699Z" fill="#00FFAB" />
      <path fillRule="evenodd" clipRule="evenodd" d="M246.524 16.1101L245.141 15.2809L250.095 6.98047L258.009 12.5275L257.084 13.8559L251.787 10.1352L307.491 271.121L305.535 271.538L249.832 10.5561L246.524 16.1101Z" fill="#00FFAB" />
      <path fillRule="evenodd" clipRule="evenodd" d="M308.784 8.21187L307.602 7.12501L314.132 0L320.759 7.03645L319.585 8.14746L315.161 3.44321L316.887 270.301L314.887 270.314L313.161 3.44319L308.784 8.21187Z" fill="#00FFAB" />
      <path fillRule="evenodd" clipRule="evenodd" d="M371.352 13.1063L370.411 11.8021L378.253 6.15039L383.312 14.3864L381.944 15.2318L378.557 9.72324L326.242 271.405L324.281 271.013L376.597 9.32601L371.352 13.1063Z" fill="#00FFAB" />
      <path fillRule="evenodd" clipRule="evenodd" d="M431.634 30.593L430.974 29.1197L439.797 25.1748L443.087 34.2642L441.575 34.8197L439.373 28.7325L335.181 274.377L333.34 273.596L437.533 27.949L431.634 30.593Z" fill="#00FFAB" />
      <path fillRule="evenodd" clipRule="evenodd" d="M487.127 59.9381L486.781 58.3601L496.215 56.291L497.598 65.8635L496.006 66.0889L495.082 59.6878L343.332 279.104L341.688 277.967L493.439 58.5469L487.127 59.9381Z" fill="#00FFAB" />
      <path fillRule="evenodd" clipRule="evenodd" d="M535.528 99.9272L535.512 98.3171L545.172 98.1963L544.584 107.849L542.976 107.753L543.369 101.301L350.361 285.394L348.98 283.947L541.994 99.8485L535.528 99.9272Z" fill="#00FFAB" />
      <path fillRule="evenodd" clipRule="evenodd" d="M575.419 148.908L575.694 147.322L584.217 149.166L581.947 158.505L580.552 158.078L582.041 151.958L355.969 292.973L354.91 291.276L581.168 150.145L575.419 148.908Z" fill="#00FFAB" />
      <path fillRule="evenodd" clipRule="evenodd" d="M603.406 204.838L604.025 203.349L612.945 207.084L608.578 215.707L607.146 214.982L610.061 209.212L359.923 301.532L359.23 299.656L609.375 207.333L603.406 204.838Z" fill="#00FFAB" />
      <path fillRule="evenodd" clipRule="evenodd" d="M620.069 265.405L620.978 264.076L628.956 269.535L622.932 277.102L621.678 276.096L625.698 271.042L362.067 310.714L361.77 308.736L625.41 269.063L620.069 265.405Z" fill="#00FFAB" />
      <path fillRule="evenodd" clipRule="evenodd" d="M628.63 332.762L362.414 318.146L362.305 320.142L628.508 334.759L623.546 338.893L624.576 340.133L631.999 333.942L625.291 326.986L624.133 328.097L628.63 332.762Z" fill="#00FFAB" />
      <path fillRule="evenodd" clipRule="evenodd" d="M618.871 395.787L361.153 327.492L360.641 329.425L618.356 397.72L612.656 400.763L613.42 402.188L621.937 397.632L616.782 389.452L615.422 390.313L618.871 395.787Z" fill="#00FFAB" />
      <path fillRule="evenodd" clipRule="evenodd" d="M596.569 455.531L358.015 336.388L357.121 338.177L595.673 457.318L589.476 459.148L589.934 460.694L599.2 457.965L595.805 448.907L594.293 449.471L596.569 455.531Z" fill="#00FFAB" />
      <path fillRule="evenodd" clipRule="evenodd" d="M562.639 509.512L353.144 344.459L351.906 346.03L561.402 511.084L554.959 511.616L555.096 513.226L564.723 512.429L563.235 502.872L561.643 503.122L562.639 509.512Z" fill="#00FFAB" />
      <path fillRule="evenodd" clipRule="evenodd" d="M518.488 555.489L346.745 351.38L345.215 352.668L516.967 556.789L510.549 556L510.348 557.594L519.942 558.77L520.409 549.117L518.808 549.036L518.488 555.489Z" fill="#00FFAB" />
      <path fillRule="evenodd" clipRule="evenodd" d="M465.944 591.569L339.072 356.854L337.312 357.805L464.186 592.522L458.058 590.449L457.543 591.979L466.696 595.07L469.116 585.707L467.556 585.305L465.944 591.569Z" fill="#00FFAB" />
      <path fillRule="evenodd" clipRule="evenodd" d="M407.187 616.238L330.451 360.665L328.535 361.24L405.273 616.815L399.695 613.548L398.883 614.941L407.223 619.827L411.486 611.149L410.038 610.432L407.187 616.238Z" fill="#00FFAB" />
      <path fillRule="evenodd" clipRule="evenodd" d="M344.662 628.475L321.238 362.644L319.246 362.819L342.67 628.66L337.869 624.327L336.792 625.526L343.966 631.999L349.893 624.367L348.622 623.377L344.662 628.475Z" fill="#00FFAB" />
      <path fillRule="evenodd" clipRule="evenodd" d="M280.952 627.798L311.818 362.719L309.831 362.487L278.966 627.559L275.143 622.348L273.848 623.298L279.566 631.099L286.917 624.828L285.871 623.596L280.952 627.798Z" fill="#00FFAB" />
      <path fillRule="evenodd" clipRule="evenodd" d="M218.694 614.199L302.571 360.872L300.672 360.243L216.802 613.552L214.12 607.679L212.656 608.355L216.67 617.146L225.138 612.493L224.366 611.084L218.694 614.199Z" fill="#00FFAB" />
      <path fillRule="evenodd" clipRule="evenodd" d="M160.488 588.256L293.9 357.193L292.168 356.193L158.762 587.246L157.322 580.949L155.754 581.303L157.909 590.731L167.142 587.897L166.676 586.351L160.488 588.256Z" fill="#00FFAB" />
      <path fillRule="evenodd" clipRule="evenodd" d="M108.74 551.048L286.147 351.835L284.654 350.505L107.247 549.716L107.116 543.247L105.508 543.279L105.709 552.948L115.328 552.047L115.175 550.445L108.74 551.048Z" fill="#00FFAB" />
      <path fillRule="evenodd" clipRule="evenodd" d="M65.5907 504.119L279.638 345.016L278.445 343.411L64.4098 502.505L65.5879 496.15L64.0035 495.86L62.2422 505.368L71.8451 506.431L72.0221 504.829L65.5907 504.119Z" fill="#00FFAB" />
      <path fillRule="evenodd" clipRule="evenodd" d="M32.8389 449.41L274.649 337.014L273.806 335.2L31.9996 447.594L34.4439 441.605L32.948 441.002L29.3047 449.954L38.4894 452.941L38.988 451.411L32.8389 449.41Z" fill="#00FFAB" />
      <path fillRule="evenodd" clipRule="evenodd" d="M11.8404 389.194L271.381 328.169L270.923 326.222L11.3913 387.245L14.9932 381.876L13.6501 380.982L8.26953 389.009L16.658 393.799L17.4623 392.398L11.8404 389.194Z" fill="#00FFAB" />
      <path fillRule="evenodd" clipRule="evenodd" d="M3.45707 325.967L269.969 318.847L269.916 316.848L3.42061 323.967L8.02657 319.442L6.89255 318.291L0 325.061L7.24643 331.454L8.3161 330.246L3.45707 325.967Z" fill="#00FFAB" />
      <path fillRule="evenodd" clipRule="evenodd" d="M11.9374 267.53L10.6505 268.496L4.84375 260.767L12.9749 255.534L13.8435 256.887L8.41241 260.389L270.83 307.46L270.477 309.429L8.05465 262.356L11.9374 267.53Z" fill="#00FFAB" />
      <path fillRule="evenodd" clipRule="evenodd" d="M28.1832 206.843L26.7274 207.535L22.6016 198.784L31.6174 195.306L32.1964 196.811L26.1704 199.139L273.622 298.451L272.877 300.307L25.4224 200.994L28.1832 206.843Z" fill="#00FFAB" />
      <path fillRule="evenodd" clipRule="evenodd" d="M56.3596 150.712L54.7993 151.091L52.5312 141.695L62.0618 140.117L62.3272 141.703L55.9576 142.758L278.178 290.197L277.072 291.864L54.8437 144.419L56.3596 150.712Z" fill="#00FFAB" />
      <path fillRule="evenodd" clipRule="evenodd" d="M95.3323 101.465L93.7238 101.514L93.4102 91.8525L103.061 92.239L102.997 93.8492L96.5378 93.5866L284.312 283.032L282.891 284.44L95.1227 95L95.3323 101.465Z" fill="#00FFAB" />
  
          </svg>
        </div>
      </section>
    </div>
  );
};

export default EyeComponent;
