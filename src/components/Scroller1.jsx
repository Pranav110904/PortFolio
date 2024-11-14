import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const Scroller1 = () => {
  useGSAP(() => {
    function marqueAnimation()
{
  window.addEventListener("wheel",function(dets)
  {
    if(dets.deltaY>0)
    {
        gsap.to(".marque",
          {
            transform:"translateX(-200%)",
            repeat:-1,
            duration:4,
            ease:"none"
          })
        
          gsap.to(".marque img",
            {
              rotate:180
            }
          )
    }
    else{
      gsap.to(".marque",
        {
          transform:"translateX(0%)",
          repeat:-1,
          duration:4,
          ease:"none"
        })
      
        gsap.to(".marque img",
          {
            rotate:0
          }
        )
    }
  })
}

marqueAnimation()
  }, []);

  return (
    <div>
      <div id="page1" className=" flex justify-center items-center h-screen w-full bg-[#09090B]">
            <div className='font-gilroy text-[6vw] font-semibold text-white pt-20'>THESE <span className='font-mazius text-[#00FFAB]'>WERE</span>  MY NO <span className='font-mazius text-[#00FFAB]'>CODE</span> SKILLS</div>
      </div>

      <div id="page2" className="w-full pb-24 bg-[#09090B]">
        <div className="flex bg-[#00FFAB] overflow-hidden py-[2vw]">
          {Array(5)
            .fill('')
            .map((_, index) => (
              <div
                key={index}
                className="marque flex items-center gap-[3vw] px-[1.5vw] flex-shrink-0"
              >
                <h1 className="text-[4vw] font-gilroy font-regular text-[#09090B]">DO SOMETHING GREAT</h1>
                <img
                  src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
                  alt="arrow"
                  className="h-[4vw]"
                />
              </div>
            ))}
        </div>
      </div>
     
{/* <button class="group relative  inline-block h-[60px] w-[200px] overflow-hidden rounded-full text-lg text-black">
    <div class="h-[inherit] w-[inherit] overflow-hidden rounded-full bg-[#00FFAB] [transition:_transform_1.5s_cubic-bezier(.19,1,.22,1)] group-hover:scale-[.94]">
      <span class="absolute bottom-0 left-1/2 z-20 block h-[200%] w-[120%] -translate-x-0 translate-y-[100%] bg-[#ffffff] [border-radius:999px_999px_0_0] [translate:-50%] group-hover:translate-y-[10px] group-hover:[border-radius:60%_60%_0_0] group-hover:[transition:_transform_1s_cubic-bezier(.19,1,.22,1)_200ms,_border-radius_.2s_cubic-bezier(.19,1,.22,1)_270ms]" />
      <span class="absolute bottom-0 left-1/2 z-20 block h-[200%] w-[120%] -translate-x-0 translate-y-[100%] bg-[#000000] [border-radius:999px_999px_0_0] [translate:-50%] group-hover:translate-y-[10px] group-hover:[border-radius:60%_60%_0_0] group-hover:[transition:_transform_1s_cubic-bezier(.19,1,.22,1)_300ms,_border-radius_.2s_cubic-bezier(.19,1,.22,1)_470ms]" />
      <span class="absolute bottom-0 left-1/2 z-20 block h-[200%] w-[120%] -translate-x-0 translate-y-[100%] bg-[#00FFAB] [border-radius:999px_999px_0_0] [translate:-50%] group-hover:translate-y-[10px] group-hover:[border-radius:60%_60%_0_0] group-hover:[transition:_transform_1s_cubic-bezier(.19,1,.22,1)_380ms,_border-radius_.2s_cubic-bezier(.19,1,.22,1)_670ms]" />
    </div>

    <span class="absolute inset-0 z-10 m-auto flex w-4/5 items-center justify-center font-gilroy font-semibold group-hover:-translate-y-1/3 group-hover:opacity-0 group-hover:[transition:_transform_1s_cubic-bezier(.32,.99,.49,.99),_opacity_.4s]">
      GET IN TOUCH
    </span>
    <span class="absolute inset-0 z-10 m-auto flex w-4/5 translate-y-1/3 items-center font-gilroy justify-center font-semibold opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:[transition:_1s_all_cubic-bezier(.32,.99,.49,.99)]">
      GET IN TOUCH
    </span>
  </button>
 */}

      
    </div>
  );
};

export default Scroller1;
