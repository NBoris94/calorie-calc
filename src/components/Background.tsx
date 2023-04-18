import Image from "next/image";
import bg from '@/images/bg.jpeg'

const Background = () => {
    return (
        <div className="bg">
            <div className="bg__overlay"></div>
            <Image
                className={'bg__img'}
                src={bg}
                alt={'Фоновое изображение'}
            />
        </div>
    )
}

export default Background