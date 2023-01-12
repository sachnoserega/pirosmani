import React from 'react'
import { SearchContext } from '../../App'
import debounce from 'lodash.debounce'

import styles from './Search.module.scss'



const Search = () => {

    const [value, setValue] = React.useState('')
    const { setSearchValue } = React.useContext(SearchContext)
    const inputRef = React.useRef()

    const onClickClear = () => {
        setSearchValue('')
        setValue('')
        inputRef.current.focus()
    }

    const updateSearchValue = React.useCallback(
        debounce((str) => {
            setSearchValue(str)
            console.log(str)
        }, 1000),
        [],
    )

    const onChangeInput = (event) => {
        setValue(event.target.value)
        updateSearchValue(event.target.value)
    }

    return (

        <div>
            <input
                ref={inputRef}
                value={value}
                className={styles.root}
                placeholder='Поиск...'
                onChange={onChangeInput}
            />
            {value &&
                <svg className={styles.clearIcon}
                    onClick={onClickClear}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
            }

        </div>
    );
}

export default Search;