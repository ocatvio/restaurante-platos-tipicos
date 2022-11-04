import perfil from '../../assets/perfil.jpg';


export const UserOrder = ({id}) => {
  return (
    <div className="flex justify-between">
        <div className='p-2'>
            <p className='font-bold text-check'>Pedido #{id}</p>
            <p>23 Feb 2022 08:24 pm</p>
        </div>
        <img className='w-14 h-14 object-cover rounded-full'  src={perfil} alt="foto perfil" />
    </div>
  )
}
