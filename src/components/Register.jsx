"use client"; // Añade esta línea al inicio del archivo
import React, { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/Register.module.css';

function Register() {
    const [showSignUp, setShowSignUp] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedAllergies, setSelectedAllergies] = useState([]);
    const [selectedCookingEquipment, setSelectedCookingEquipment] = useState([]);
    const[selectedDiet, setSelectedDiet] = useState([]);
    const[selectedPreferences, setSelectedPreferences] = useState([]);
    const [showAllergiesDropdown, setShowAllergiesDropdown] = useState(false);
    const [showDietDropdown, setShowDietDropdown] = useState(false);
    const [showPreferencesDropdown, setShowPreferencesDropdown] = useState(false);
    const [showEquipmentDropdown, setShowEquipmentDropdown] = useState(false);


    const handleButtonClick = () => {
        setShowSignUp(true);
    };

    const handleSubmitBoton = () => {
        console.log(selectedAllergies);
    }

    const handleSelectAllergy = (allergy) => {
        if (selectedAllergies.includes(allergy)) {
            setSelectedAllergies(selectedAllergies.filter(a => a !== allergy));
        } else {
            setSelectedAllergies([...selectedAllergies, allergy]);
        }
    };

    const handleSelectCookingEquipment = (equipment) => {
        if (selectedCookingEquipment.includes(equipment)) {
            setSelectedCookingEquipment(selectedCookingEquipment.filter(e => e !== equipment));
        } else {
            setSelectedCookingEquipment([...selectedCookingEquipment, equipment]);
        }
    }

    const handleSelectDiet = (diet) => {
        if (selectedDiet.includes(diet)) {
            setSelectedDiet(selectedDiet.filter(d => d !== diet));
        } else {
            setSelectedDiet([...selectedDiet, diet]);
        }
    }

    const handleSelectPreferences = (preference) => {
        if (selectedPreferences.includes(preference)) {
            setSelectedPreferences(selectedPreferences.filter(p => p !== preference));
        } else {
            setSelectedPreferences([...selectedPreferences, preference]);
        }
    }

    const toggleAllergiesDropdown = () => {
        setShowAllergiesDropdown(!showAllergiesDropdown);
        // Opcionalmente, cierra el otro menú desplegable cuando uno se abre
        setShowDietDropdown(false);
        setShowPreferencesDropdown(false);
        setShowEquipmentDropdown(false);
    };

    const toggleDietDropdown = () => {
        setShowDietDropdown(!showDietDropdown);
        // Opcionalmente, cierra el otro menú desplegable cuando uno se abre
        setShowAllergiesDropdown(false);
        setShowPreferencesDropdown(false);
        setShowEquipmentDropdown(false);
    };

    const togglePreferencesDropdown = () => {
        setShowPreferencesDropdown(!showPreferencesDropdown);
        // Opcionalmente, cierra el otro menú desplegable cuando uno se abre
        setShowDietDropdown(false);
        setShowAllergiesDropdown(false);
        setShowEquipmentDropdown(false);
    }

    const toggleEquipmentDropdown = () => {
        setShowEquipmentDropdown(!showEquipmentDropdown);
        // Opcionalmente, cierra el otro menú desplegable cuando uno se abre
        setShowDietDropdown(false);
        setShowAllergiesDropdown(false);
        setShowPreferencesDropdown(false);
    }


    return (
        <div className={styles.container}>
            <div className={styles.background}></div>
            {!showSignUp ? (
                <div className={styles.content}>
                    <h1 className={styles.title}>WELCOME TO <br />OPTIFOOD</h1>
                    <h2 className={styles.sub}>Where every ingredient counts</h2>
                    <button className={styles.button} onClick={handleButtonClick}>
                        <span>LETS GET STARTED</span>
                    </button>
                </div>
            ) : (
                <div className={styles.content}>
                    <h1 className={styles.title2}>FILL OUT THE FORM :] </h1>
                    <h2 className={styles.sub}>You can edit it later</h2>
                    <div className={styles.LogoContainer}>
                        <Image src="/pfp.webp" alt="logo" width={125} height={125} />
                    </div>

            <div className={styles.formContent}>

                    <div className={styles.preferences}>
                            <label onClick={() => toggleAllergiesDropdown(!showDropdown)}>Allergies</label>
                            {showAllergiesDropdown && (
                                <div >
                                    {['Nuts', 'Gluten', 'Dairy', 'Shellfish'].map((allergy, index, array) => (
                                        <div
                                            key={allergy}
                                            className={styles.optionss}
                                            onClick={() => handleSelectAllergy(allergy)}
                                        >
                                            <div className={styles.checkbox}
                                                style={{   
                                                    backgroundColor: selectedAllergies.includes(allergy) ? '#592941' : 'transparent',
                                                }}
                                            ></div>
                                            {allergy}
                                        </div>
                                    ))}
                                </div>
                            )}
                        
                    </div>

                    <div className={styles.preferences}>
                            <label onClick={() => toggleDietDropdown()}>Diet</label>
                            {showDietDropdown && (
                                <div >
                                    {['Vegan', 'Vegetarian', 'Low-Carb'].map((diet, index, array) => (
                                        <div
                                            key={diet}
                                            className={styles.optionss}
                                            onClick={() => handleSelectDiet(diet)}
                                        >
                                            <div className={styles.checkbox}
                                                style={{   
                                                    backgroundColor: selectedDiet.includes(diet) ? '#592941' : 'transparent',
                                                }}
                                            ></div>
                                            {diet}
                                        </div>
                                    ))}
                                </div>
                            )}
                        
                    </div>

                    <div className={styles.preferences}>
                            <label onClick={() => togglePreferencesDropdown()}>Preffered Cuisines </label>
                            {showPreferencesDropdown && (
                                <div >
                                    {['Mexican', 'Italian', 'Chinese', 'Japanese', 'Thai', 'Greek', 'Cuban', 'Indian', 'Vietnamese'].map((preference, index, array) => (
                                        <div
                                            key={preference}
                                            className={styles.optionss}
                                            onClick={() => handleSelectPreferences(preference)}
                                        >
                                            <div className={styles.checkbox}
                                                style={{   
                                                    backgroundColor: selectedPreferences.includes(preference) ? '#592941' : 'transparent',
                                                }}
                                            ></div>
                                            {preference}
                                        </div>
                                    ))}
                                </div>
                            )}
                        
                    </div>

                        

                    <div className={styles.preferences}>
                            <label onClick={() => toggleEquipmentDropdown(showEquipmentDropdown)}>Cooking Stations</label>
                            {showEquipmentDropdown && (
                                <div >
                                    {['Nuts', 'Gluten', 'Dairy', 'Shellfish'].map((equipment, index, array) => (
                                        <div
                                            key={equipment}
                                            className={styles.optionss}
                                            onClick={() => handleSelectCookingEquipment(equipment)}
                                        >
                                            <div className={styles.checkbox}
                                                style={{   
                                                    backgroundColor: selectedCookingEquipment.includes(equipment) ? '#592941' : 'transparent',
                                                }}
                                            ></div>
                                            {equipment}
                                        </div>
                                    ))}
                                </div>
                            )}
                        
                    </div>
            </div>    
                    <button className={styles.submitBut} onClick={handleSubmitBoton} type="submit">Submit</button>


           
                   
                </div>
                
            )}
        </div>
    );
}

export default Register;