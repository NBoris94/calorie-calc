import {ChangeEvent, MouseEventHandler, useEffect, useState} from "react";
import {IForm} from "@/types";
import {getCalories} from "@/utils/formules";
import useResultStore from "@/store/result";

const INITIAL_FORM_STATE: IForm = {
    gender: 'male',
    age: 0,
    height: 0,
    weight: 0,
    activity: 'min'
}

const Form = () => {
    const setResult = useResultStore(state => state.setResult)
    const [form, setForm] = useState<IForm>(INITIAL_FORM_STATE)
    const [isValid, setIsValid] = useState<boolean>(false)

    useEffect(() => {
        setIsValid(handleValid())
    }, [form])

    const handleValid = (): boolean => {
        let valid = true

        if (form.age <= 0) {
            valid = false
        }

        if (form.height <= 0) {
            valid = false
        }

        if (form.weight <= 0) {
            valid = false
        }

        return valid
    }

    const handleChange = (e: ChangeEvent) => {
        const { name, value } = e.target

        setForm(prevState => ({ ...prevState, [name]: value }))
    }

    const handleClear = (e) => {
        setForm(INITIAL_FORM_STATE)

        setResult('0', '0')
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const result = getCalories(form)

        setResult(result.normal, result.day)
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <fieldset className="form__group">
                <legend className="form__legend h2">Пол</legend>
                <div className="form__btn-radios">
                    <div className="form__btn-radio">
                        <input
                            type="radio"
                            id="male"
                            name="gender"
                            value="male"
                            checked={form.gender === 'male'}
                            onChange={handleChange}
                        />
                        <label htmlFor="male">Мужской</label>
                    </div>
                    <div className="form__btn-radio">
                        <input
                            type="radio"
                            id="female"
                            name="gender"
                            value="female"
                            checked={form.gender === 'female'}
                            onChange={handleChange}
                        />
                        <label htmlFor="female">Женский</label>
                    </div>
                </div>
            </fieldset>
            <fieldset className="form__group form__row">
                <legend className="visually-hidden">Параметры человека</legend>
                <div className="form__group">
                    <label className="form__label h2" htmlFor="age">
                        Возраст
                        <span className="text-light">лет</span>
                    </label>
                    <input
                        className="form__control"
                        type="number"
                        id="age"
                        name="age"
                        value={form.age}
                        onChange={handleChange}
                        min="0"
                        max="150"
                    />
                </div>
                <div className="form__group">
                    <label className="form__label h2" htmlFor="height">
                        Рост
                        <span className="text-light">см</span>
                    </label>
                    <input
                        className="form__control form__control_error"
                        type="number"
                        id="height"
                        name="height"
                        value={form.height}
                        onChange={handleChange}
                        min="0"
                    />
                        <span className="form__error">Значение не должно быть отрицательным</span>
                </div>
                <div className="form__group">
                    <label className="form__label h2" htmlFor="weight">
                        Вес
                        <span className="text-light">кг</span>
                    </label>
                    <input
                        className="form__control"
                        type="number"
                        id="weight"
                        name="weight"
                        value={form.weight}
                        onChange={handleChange}
                        min="0"
                    />
                </div>
            </fieldset>
            <fieldset className="form__group">
                <legend className="form__legend h2">Физическая активность</legend>
                <div className="form__radio">
                    <input
                        type="radio"
                        name="activity"
                        id="min"
                        value="min"
                        checked={form.activity === 'min'}
                        onChange={handleChange}
                    />
                        <label className="text" htmlFor="min">
                            Минимальная
                            <span className="text-light">Сидячая работа, отсутствие физических нагрузок</span>
                        </label>
                </div>
                <div className="form__radio">
                    <input
                        type="radio"
                        name="activity"
                        id="low"
                        value="low"
                        checked={form.activity === 'low'}
                        onChange={handleChange}
                    />
                        <label className="text" htmlFor="low">
                            Низкая
                            <span
                                className="text-light">Редкие, нерегулярные тренировки, активность в быту</span>
                        </label>
                </div>
                <div className="form__radio">
                    <input
                        type="radio"
                        name="activity"
                        id="medium"
                        value="medium"
                        checked={form.activity === 'medium'}
                        onChange={handleChange}
                    />
                        <label className="text" htmlFor="medium">
                            Средняя
                            <span className="text-light">Тренировки 3-5 раз в неделю</span>
                        </label>
                </div>
                <div className="form__radio">
                    <input
                        type="radio"
                        name="activity"
                        id="high"
                        value="high"
                        checked={form.activity === 'high'}
                        onChange={handleChange}
                    />
                        <label className="text" htmlFor="high">
                            Высокая
                            <span className="text-light">Тренировки 6-7 раз в неделю</span>
                        </label>
                </div>
                <div className="form__radio">
                    <input
                        type="radio"
                        name="activity"
                        id="very-high"
                        value="very-high"
                        checked={form.activity === 'very-high'}
                        onChange={handleChange}
                    />
                        <label className="text" htmlFor="very-high">
                            Очень высокая
                            <span
                                className="text-light">Больше 6 тренировок в неделю и физическая работа</span>
                        </label>
                </div>
            </fieldset>
            <div className="form__btns">
                <button className="form__submit btn" type="submit" disabled={!isValid}>Рассчитать</button>
                <button className="form__reset btn btn_transparent" type="reset" onClick={handleClear}>Очистить поля</button>
            </div>
        </form>
    )
}

export default Form