

export const InformacionCard = ({restaurantImg}) => {

    
  
    
  return (
    <div className="">
        <div className="flex items-center mt-16 lg:flex-row flex-col  gap-8 bg-fondoCard2 shadow-lg rounded-md ">
        <img
          className="lg:w-[50%] lg:h-[25rem] w-full h-[25rem] rounded-sm  object-cover scale-100 "
          src={restaurantImg}
          alt=""
        />
        <div className="p-8 overflow-hidden ">
          <h2 className="pb-4">Restaurante San Andres de Tumaco</h2>
          <p className="text-sm">

          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          eos dolores culpa ea animi quos nobis illo inventore? Nam similique
          modi vero quisquam, dignissimos illo rem tenetur reprehenderit
          repudiandae temporibus. Dolores iste nihil, accusamus dolorum animi
          sed, ipsam architecto at qui aliquam laboriosam ab fugit blanditiis!
          Beatae aliquam, provident sint temporibus eveniet dolor dignissimos,
          reprehenderit consequatur ratione consequuntur iure placeat. Ab veniam
          libero temporibus deleniti maiores sit. Libero quod blanditiis
          architecto ex corrupti provident sequi placeat animi perspiciatis
          dolorem nulla accusantium reprehenderit sed exercitationem optio
          eligendi, ipsa voluptate veniam ut? Autem voluptates iure minima
          voluptatibus, consequatur assumenda unde et ex eius porro debitis ut
          odio doloribus. Officiis dolorum placeat ex nulla ullam nesciunt quo
          cupiditate commodi accusamus ipsa, ab esse! Ad blanditiis optio,
          tempora, provident at voluptates fugit saepe velit eligendi possimus
          est nulla, eum magni officia aspernatur fuga reiciendis sapiente quae
          id aliquid minima voluptatibus! Architecto officiis quasi aliquid.
          Itaque in explicabo dolorum rerum, esse minima ducimus beatae facilis
         
          </p>
        </div>
      </div>
      <div className="  flex lg:flex-row flex-col lg:mt-36  mt-10 items-center  gap-4 bg-fondoCard2 shadow-lg rounded-md">
        
        <div className="p-8 overflow-hidden ">
          <h2 className="pb-4">Misión y Visión</h2>
          <p className="text-sm">

          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          eos dolores culpa ea animi quos nobis illo inventore? Nam similique
          modi vero quisquam, dignissimos illo rem tenetur reprehenderit
          repudiandae temporibus. Dolores iste nihil, accusamus dolorum animi
          sed, ipsam architecto at qui aliquam laboriosam ab fugit blanditiis!
          Beatae aliquam, provident sint temporibus eveniet dolor dignissimos,
          reprehenderit consequatur ratione consequuntur iure placeat. Ab veniam
          libero temporibus deleniti maiores sit. Libero quod blanditiis
          architecto ex corrupti provident sequi placeat animi perspiciatis
          dolorem nulla accusantium reprehenderit sed exercitationem optio
          eligendi, ipsa voluptate veniam ut? Autem voluptates iure minima
          voluptatibus, consequatur assumenda unde et ex eius porro debitis ut
          odio doloribus. Officiis dolorum placeat ex nulla ullam nesciunt quo
          cupiditate commodi accusamus ipsa, ab esse! Ad blanditiis optio,
          tempora, provident at voluptates fugit saepe velit eligendi possimus
          est nulla, eum magni officia aspernatur fuga reiciendis sapiente quae
          id aliquid minima voluptatibus! Architecto officiis quasi aliquid.
          Itaque in explicabo dolorum rerum, esse minima ducimus beatae facilis
         
          </p>
        </div>
        <img
          className=" lg:w-[50%] lg:h-[25rem] w-full h-[25rem] rounded-sm  object-cover scale-100 "
          src={restaurantImg}
          alt=""
        />
      </div>
    </div>
  )
}
