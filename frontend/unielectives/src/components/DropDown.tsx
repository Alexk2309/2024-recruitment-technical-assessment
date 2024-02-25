import { useState } from 'react';
import '../styles/DropDown.css';


const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null); // If you want to track the selected option

    const options = ['Alphabetical (A-Z)', 'Alphabetical (Z-A)',
    'Overall Rating', 'Enjoyability', 'Usefulness', 'Manageability'];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: any) => {
        setSelectedOption(option);
        setIsOpen(false); // Close the dropdown after selecting an option
    };

    return (
        <div id="dropdown-container">
            <div id="dropdown-header" onClick={toggleDropdown}>
                {selectedOption || 'Sort by'}
            </div>

            {isOpen && (
                <div className="dropdown-options">
                {options.map((option, index) => (
                    <div key={index} onClick={() => handleOptionClick(option)}>
                    {option}
                    </div>
                ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;