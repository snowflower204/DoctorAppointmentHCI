import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { logo } from '../../assets'

const PatientConsentPopUp = ({toggleDropdown, navigateTo}) => {
    return (
        <motion.div
            className="pop_up_container PatientInformation_popup"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
            <motion.div
                className="block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }} // 300ms delay
            >
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <img src={logo} alt="" />
                </motion.div>
                <br />
                <br />
                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    Consent to Data Collection and Processing
                </motion.h1>
                
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <p>By checking this box, I confirm that:</p>
                    <br />
                    <ul>
                        <motion.li 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 }}
                        >
                            I voluntarily provide my personal and health-related information for the purpose of booking a dental appointment, receiving dental care, and maintaining patient records.
                        </motion.li>

                        <motion.li 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.73 }}
                        >
                            I understand that this information may include sensitive data such as my name, contact details, medical history, and insurance information.
                        </motion.li>

                        <motion.li 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.76 }}
                        >
                            I consent to the processing of this data by LMAO DENTAL CLINIC, in accordance with the Philippine Data Privacy Act of 2012 (R.A. 10173).
                        </motion.li>

                        <motion.li 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.79 }}
                        >
                            I understand that my data will be securely stored, used only by authorized personnel, and not shared with third parties without my consent unless required by law.
                        </motion.li>

                        <motion.li 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.82 }}
                        >
                            I am aware of my rights to access, correct, or withdraw my data at any time.
                        </motion.li>

                        <motion.li 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.85 }}
                        >
                            I agree to be contacted for appointment reminders or healthcare-related communications.

                        </motion.li>
                    </ul>
                </motion.div>
                
                <br />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <p>
                        <span>Read our full </span>
                        <a href="#"><u>Privacy Policy</u></a>
                        <span> to learn how we collect, use, and protect your information.</span>
                    </p>
                </motion.div>
                <br />

                <motion.div 
                    className="checkbox"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                >
                    <label>
                        <input type="checkbox" />
                        <span> I have read and understood the above, and I give my consent to the collection and processing of my data.</span>
                    </label>
                </motion.div>

                <br />
                <motion.div 
                    className="button_container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.0 }}
                >
                    <button onClick={toggleDropdown}>Return</button>
                    <button onClick={navigateTo}>I Agree</button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default PatientConsentPopUp