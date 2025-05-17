import React, { useState } from 'react'

// NOTE: WHEN USING THIS COMPONENT, MAKE SURE THAT THE PARENT ELEMENT HAS A POSITION OF RELATIVE

const DropdownField = ({ listItems, inputFieldText = "Select Item", label = "Item" }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState([])

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelectItem = (allergy) => {
        if (allergy.value === 'none') {
            setSelectedItem(['none']);
            return;
        }

        setSelectedItem(prev => {
            // Remove 'none' if any other allergy is selected
            const filtered = prev.filter(a => a !== 'none');

            // Toggle the allergy
            return filtered.includes(allergy.value)
                ? filtered.filter(a => a !== allergy.value)
                : [...filtered, allergy.value];
        });
    };

    const selectedLabels = selectedItem.map(value => {
        const item = listItems.find(a => a.value === value);
        return item ? item.label : null;
    }).filter(Boolean).join(', ') || inputFieldText;
    return (
        <div className="dropdown-container">
            <div
                className="dropdown-header"
                onClick={toggleDropdown}
            >
                <p>{selectedLabels}</p>
                <span className={`arrow ${isOpen ? 'open' : ''}`}>▼</span>
            </div>

            {isOpen && (
                <div className="dropdown-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Select</th>
                                <th>{label}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listItems.map((item) => (
                                <tr
                                    key={item.value}
                                    className={selectedItem.includes(item.value) ? 'selected' : ''}
                                >
                                    <td>
                                        <input
                                            type="checkbox"
                                            checked={selectedItem.includes(item.value)}
                                            onChange={() => handleSelectItem(item)}
                                        />
                                    </td>
                                    <td>{item.label}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

export default DropdownField