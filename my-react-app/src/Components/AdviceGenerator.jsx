import { useEffect, useState } from 'react';
import { getAdvice } from '../DataContext/DataServices';

function AdviceGenerator() {
  const [adviceId, setAdviceId] = useState("");
  const [adviceText, setAdviceText] = useState("");

  const getData = async () =>
  {
    let advice = await getAdvice();
    setAdviceId( advice.slip.id );
    setAdviceText( advice.slip.advice );
  }

  useEffect(() =>
  {
    getData();
  }, []);

  return (
    <div className="bg-[#202632] h-[100vh] text-white flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="grid">

          <div className="bg-[#313A49] rounded-[10px] min-h-[330px] w-[540px] max-[580px]:w-[342px] flex flex-col justify-evenly row-span-10 row-start-1 row-end-11 col-start-1">

            <div className="flex justify-center text-[#50F3A4] font-[Manrope] tracking-[5px] mt-[15px]">
              <h1>ADVICE #{adviceId}</h1>
            </div>

            <div className="flex justify-center font-[Manrope] font-[800] text-[28px] text-center mx-[35px]">
              <h1>"{adviceText}"</h1>
            </div>

            <div className="flex justify-center mb-[20px]">
              <img className="max-[580px]:hidden" src="/images/pattern-divider-desktop.svg" alt="" />
              <img className="min-[580px]:hidden" src="/images/pattern-divider-mobile.svg" alt="" />
            </div>

          </div>

          <div className="flex justify-center row-span-2 row-start-10 row-end-12 col-start-1">
            <div className="bg-[#53FFAB] w-[64px] h-[64px] flex justify-center rounded-full hover:shadow-[0px_0px_2em_0px_rgba(0,0,0)] shadow-[#53FFAB]">
              <button className="cursor-pointer w-[64px] h-[64px]" onClick={() => getData()}>
                <img className="m-auto" src="/images/icon-dice.svg" alt="" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default AdviceGenerator