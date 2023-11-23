document.addEventListener('DOMContentLoaded', function () {
                        const formulario = document.querySelector('.profile_box_form');

                        // Validación del nombre
                        const nombreInput = document.getElementById('name');
                        const nombreError = document.getElementById('nameError');

                        nombreInput.addEventListener('keypress', function (event) {
                            const charCode = event.charCode;
                            const inputValue = nombreInput.value + String.fromCharCode(charCode);

                            if (inputValue !== '' && !isValidName(inputValue)) {
                                event.preventDefault();
                                nombreInput.classList.add('error-input');
                                nombreError.textContent = 'Por favor, ingresa un nombre válido.';
                            } else {
                                nombreInput.classList.remove('error-input');
                                nombreError.textContent = '';
                            }
                        });

                        // Validación  del apellido
                        const apellidoInput = document.getElementById('surname');
                        const apellidoError = document.getElementById('surnameError');

                        apellidoInput.addEventListener('keypress', function (event) {
                            const charCode = event.charCode;
                            const inputValue = apellidoInput.value + String.fromCharCode(charCode);

                            if (inputValue !== '' && !isValidName(inputValue)) {
                                event.preventDefault();  
                                apellidoInput.classList.add('error-input');
                                apellidoError.textContent = 'Por favor, ingresa un apellido válido.';
                            } else {
                                apellidoInput.classList.remove('error-input');
                                apellidoError.textContent = '';
                            }
                        });

                        // Validación del DNI
                        const dniInput = document.getElementById('dni');
                        const dniError = document.getElementById('dniError');

                        dniInput.addEventListener('keypress', function (event) {
                            const charCode = event.charCode;
                            const inputValue = dniInput.value + String.fromCharCode(charCode);

                            if (inputValue !== '' && !isValidNumber(inputValue)) {
                                event.preventDefault(); 
                                dniInput.classList.add('error-input');
                                dniError.textContent = 'Por favor, ingresa un DNI válido (solo números).';
                            } else {
                                dniInput.classList.remove('error-input');
                                dniError.textContent = '';
                            }
                        });

                        
                        const celularInput = document.getElementById('phone');
                        const celularError = document.getElementById('phoneError');

                        celularInput.addEventListener('input', function (event) {
                            let inputValue = celularInput.value;

                            
                            if (inputValue.length > 12) {
                                inputValue = inputValue.slice(0, 12);
                                celularInput.value = inputValue;
                            }

                            if (inputValue !== '' && !isValidNumber(inputValue)) {
                                celularInput.value = inputValue.slice(0, -1); 
                                celularInput.classList.add('error-input');
                                celularError.textContent = 'Por favor, ingresa un número de celular válido (solo números).';
                            } else {
                                celularInput.classList.remove('error-input');
                                celularError.textContent = '';
                            }
                        });

                        formulario.addEventListener('submit', function (event) {
                            
                        });

                        function isValidName(value) {
                            
                            const nameRegex = /^[A-Za-záéíóúüñÁÉÍÓÚÜÑ\s'.-]+$/;
                            return nameRegex.test(value);
                        }

                        function isValidNumber(value) {
                            
                            const numberRegex = /^[0-9]+$/;
                            return numberRegex.test(value);
                        }
                    });