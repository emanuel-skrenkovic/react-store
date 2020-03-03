import React, { useState } from 'react';

export const ShopFilter: React.FC = () => {
    const [searchString, setSearchString] = useState('');

    const onClickSubmitButton = (event: React.SyntheticEvent ) => {
        event.preventDefault();

        console.log(searchString);
    };

    return (
        <div>
            <input value={searchString} onChange={e => setSearchString(e.target.value) }/>
            <button type="submit" onClick={onClickSubmitButton}>Apply</button>
        </div>
    );
};