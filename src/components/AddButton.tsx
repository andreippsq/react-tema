import React from 'react'

type Props = {
    triggeredFunction?: () => void,
    textContent: string
}

export default function AddButton({ triggeredFunction, textContent }: Props) {
    return (
        <div className="add__container">
            <button className="button" id="addButton" onClick={triggeredFunction}>{textContent}</button>
        </div>
    )
}