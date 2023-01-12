import React from 'react'

const Categories = ({ onChangeCategory, value }) => {

    const categories = ['Все', 'Супы', 'Шашлык', 'Салаты', 'Соусы', 'Хинкали']

    return (
        <div className="categories">
            <ul>
                {categories.map((item, index) => (
                    <li
                    key={item}
                    onClick={() => onChangeCategory(index)}
                    className={value === index ? 'active' : ''}
                    >{item}</li>   
                ))}
            </ul>
        </div>
    );
}

export default Categories;