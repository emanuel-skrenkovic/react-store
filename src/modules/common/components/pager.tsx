import React from 'react';

export interface PagerProps {
    currentPage: number;
    pageSize: number;
    totalItemCount: number;
    onClickNext: () => void;
    onClickPrevious: () => void;
}

export const Pager: React.FC<PagerProps> = (props: PagerProps) => {
    const { currentPage, pageSize, totalItemCount } = props;

    const onClickNext = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();

        props.onClickNext();
    };

    const onClickPrevious = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();

        props.onClickPrevious();
    };

    const totalPages = Math.ceil(totalItemCount / pageSize);

    return (
        <div className="ui container">
            <button className="ui button" onClick={onClickPrevious}>Previous</button>
            <button className="ui button" onClick={onClickNext}>Next</button>
            <label className="ui label">
                Page {currentPage} of {totalPages}.
            </label>
        </div>
    );
};