import React from 'react'
//receives svg icon as react element and title string
type CategoryProps = {
    svg: React.ReactElement
    title: string
}

function Category(props: CategoryProps) {
    const { svg, title } = props

    function handleClick(e: React.MouseEvent<HTMLDivElement>): void {
        //handle request to backend on click on click
    }

    return (
        <div className='flex flex-col gap-3 items-center' onClick={(e) => handleClick(e)}>
            {svg}
            <p className='text-sm'>{title}</p>
        </div>
    )
}

export default Category
