import useResultStore from "@/store/result";

const Result = () => {
    const normal = useResultStore(state => state.normal)
    const day = useResultStore(state => state.day)

    if (normal === '0' && day === '0') {
        return null
    }

    return (
        <div className="counter-result counter-result_active wrapper">
            <h2 className="counter-result__title h2">Ваш результат</h2>
            <div className="counter-result__body">
                <p className="counter-result__text text">
                    Суточная норма - <strong>{normal} ккал</strong>, необходимая организму для нормального функционирования.
                </p>
                <p className="counter-result__text text">
                    Для поддержания веса нужно употреблять <strong>{day} ккал</strong> в день.
                </p>
            </div>
        </div>
    )
}

export default Result