import React from 'react'

const PageNavigation = ({page, setPage}) => {
    return (
        <div className="flex justify-between font-semibold mt-2 px-5 text-lg">
            <div>
                Page No : {page}
            </div>
            <div>
                <button
                    disabled={page === 1}
                    onClick={() => setPage(prev => prev - 1)}
                    className={`${page === 1 ? 'text-slate-700' : null}`}
                >
                    Previous
                </button>
                &nbsp;- &nbsp;
                <button
                    onClick={() => setPage(prev => prev + 1)}
                >
                    Next
                </button>
            </div>
            <div>
                Per Page : 10
            </div>
        </div>
    )
}

export default PageNavigation