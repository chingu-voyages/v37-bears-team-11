import React from 'react'
//receives svg icon as react element and title string
type CategoryProps = {
    svg: React.ReactElement
    title: string
}

function Category(props: CategoryProps) {
    const { svg, title } = props

    function handleClick(e: Event): void {
        //handle request to backend on click on click
    }

    return (
        <div className='flex flex-col gap-3 items-center'>
            {svg}
            <p className='text-sm'>{title}</p>
        </div>
    )
}

export default Category
