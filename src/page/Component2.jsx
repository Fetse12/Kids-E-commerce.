import card1 from '../assets/foot1.png'
import card2 from '../assets/foot2.png'
import card3 from '../assets/foot3.png'
import card4 from '../assets/foot4.png'
import card5 from '../assets/foot5.png'



export default function Fotter() {
  return (
    <div className='mt-[500px] flex justify-center gap-16'>
        <img className='w-[236px] h-[321px]' src={card1} alt="" />
        <img className='w-[236px] h-[321px]' src={card4} alt="" />
        <img className='w-[236px] h-[321px]' src={card5} alt="" />
        <img className='w-[236px] h-[321px]' src={card2} alt="" />
        <img className='w-[236px] h-[321px]' src={card3} alt="" />
    </div>
  )
}
