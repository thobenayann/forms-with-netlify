// Next

function ContactForm() {
    
    return (
        <main className="relative">
                <section className="flex flex-col justify-center items-center h-contactFormSection bg-contact-bg-form bg-no-repeat bg-cover relative shadow-card p-2">
                    <div className="flex flex-col items-center absolute top-16">
                        <div className="text-center">
                            <h2 className="font-raleway flex flex-col justify-around items-center">
                            Contact<span className="border-[#0B4FB2] border-b-2 w-16 p-3"></span></h2>
                        </div>
                    </div>
                    <form
                        className="bg-gradient-to-br from-[#e95810c9] to-[#e20008ce] rounded-2xl px-10 py-4 backdrop-filter backdrop-opacity-50 w-11/12 sm:w-full lg:w-3/5"
                        name="contact"
                        method="POST"
                        action="/success"
                        data-netlify="true"  
                    >
                        <input type="hidden" name="form-name" value="contact" />
                        <div className="flex flex-col sm:flex-row justify-between py-6 px-10">
                            <div className="md:w-60 mr-2 mb-4 w-full lg:mb-0 lg:mr-0">
                                <label className="flex flex-col">
                                <input
                                    className="rounded-3xl shadow-md"
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Nom"
                                    required
                                    // checked={this.state.isGoing}
                                    // onChange={this.handleInputChange}
                                    />
                                </label>
                            </div>
                            <div className="md:w-60 w-full">
                                <label className="flex flex-col">
                                <input
                                    className="rounded-3xl shadow-md"
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    placeholder="Email"
                                    // value={this.state.numberOfGuests}
                                    // onChange={this.handleInputChange}
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-between pb-6 px-10">
                            <div className="md:w-60 mr-2 mb-4 w-full lg:mb-0 lg:mr-0">
                                <label className="flex flex-col">
                                <input
                                    className="rounded-3xl shadow-md"
                                    id="entreprise"
                                    name="entreprise"
                                    type="text"
                                    placeholder="Entreprise"
                                    // checked={this.state.isGoing}
                                    // onChange={this.handleInputChange}
                                    />
                                </label>
                            </div>
                            <div className="md:w-60 w-full">
                                <label className="flex flex-col">
                                <input
                                    className="rounded-3xl shadow-md"
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    pattern="[0-9]{10}"
                                    minLength="10"
                                    maxLength="10"
                                    required
                                    placeholder="Téléphone"
                                    // value={this.state.numberOfGuests}
                                    // onChange={this.handleInputChange}
                                    />
                                </label>
                            </div>
                        </div>
                        <div>
                            <label className="flex flex-col pb-6 md:px-10">
                                <textarea
                                    className="rounded-xl form-textarea shadow-md resize-none"
                                    id="message"
                                    name="message"
                                    type="text"
                                    rows="4"
                                
                                    required
                                    placeholder="Vous pouvez écrire votre message ici"
                                    // value={this.state.numberOfGuests}
                                    // onChange={this.handleInputChange}
                                    />
                            </label>
                        </div>
                        <div className="flex justify-end">
                            <button className="btn text-xs lg:text-base hover:ring drop-shadow-3xl">Envoyer</button>
                        </div>
                    </form>
                </section>
                {/* Project form */}
                <section className="flex flex-col justify-center items-center h-contactFormSection relative p-2">
                    <div className="flex flex-col items-center absolute top-16">
                        <div className="text-center">
                            <h2 className="font-raleway text-black flex flex-col justify-around items-center">
                            Vôtre projet<span className="border-[#0B4FB2] border-b-2 w-16 p-3"></span></h2>
                        </div>
                    </div>
                    <form
                        className="bg-gradient-to-br from-[#e95810c9] to-[#e20008ce] rounded-2xl px-10 mt-28 sm:mt-0 py-4 backdrop-filter backdrop-opacity-50 w-11/12 sm:w-full lg:w-3/5 shadow-card"
                        name="votre projet"
                        method="POST"
                        action="/success"
                        data-netlify="true" 
                    >
                    <input type="hidden" name="votre projet" value="votre projet" />
                        <div className="flex flex-col sm:flex-row justify-between py-6 px-10">
                            <div className="md:w-60 mr-2 mb-4 w-full lg:mb-0 lg:mr-0">
                                <input
                                    className="rounded-3xl shadow-md w-full"
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Nom"
                                    required
                                    // checked={this.state.isGoing}
                                    // onChange={this.handleInputChange}
                                    />
                            </div>
                            <div className="md:w-60 w-full">
                                <input
                                    className="rounded-3xl shadow-md w-full"
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    placeholder="Email"
                                    // value={this.state.numberOfGuests}
                                    // onChange={this.handleInputChange}
                                    />
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-between pb-6 px-10">
                            <div className="md:w-60 mr-2 mb-4 w-full lg:mb-0 lg:mr-0">
                                <input
                                    className="rounded-3xl shadow-md w-full"
                                    id="entreprise"
                                    name="entreprise"
                                    type="text"
                                    placeholder="Entreprise"
                                    // checked={this.state.isGoing}
                                    // onChange={this.handleInputChange}
                                    />
                            </div>
                            <div className="md:w-60 w-full">
                                <input
                                    className="rounded-3xl shadow-md w-full"
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    pattern="[0-9]{10}"
                                    minLength="10"
                                    maxLength="10"
                                    required
                                    placeholder="Téléphone"
                                    // value={this.state.numberOfGuests}
                                    // onChange={this.handleInputChange}
                                    />
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-between pb-6 px-10">
                            <div className="md:w-60 mr-2 mb-4 w-full lg:mb-0 lg:mr-0">
                                <select className="md:w-60 w-full rounded-3xl shadow-md text-gray-600" id="procédé-de-soudage" name="procédé-de-soudage" required>
                                    <option value="">Quel procédé de soudage?</option>
                                    <option value="Arc">Arc</option>
                                    <option value="MIG">MIG</option>
                                    <option value="TIG">TIG</option>
                                </select>
                            </div>
                            <div className="md:w-60 w-full">
                                <input
                                    className="rounded-3xl shadow-md md:w-60 w-full"
                                    id="Epaisseur en mm"
                                    name="Epaisseur en mm"
                                    type="number"
                                    min="0"
                                    max="12"
                                    placeholder="Quelle épaisseur max?(en mm)"
                                    // value={this.state.numberOfGuests}
                                    // onChange={this.handleInputChange}
                                    />
                            </div>
                        </div>
                            <fieldset className="flex flex-col md:w-60 mb-4 lg:mb-0 lg:mr-0 pb-6 px-6 sm:px-10">      
                                <legend className="px-4 py-2 text-gray-600 rounded-full bg-white w-full sm:w-80 border-gray-600 border">Quelle(s) matière(s) allez vous souder ?</legend>
                                <div className="flex justify-around sm:w-80">
                                    <div className="text-blue-300 flex items-center">
                                        Acier<input className="ml-2" type="checkbox" name="Matière" value="Acier"/>
                                    </div>
                                    <div className="text-blue-600 flex items-center">
                                        Inox<input className="ml-2" type="checkbox" name="Matière" value="Inox"/>
                                    </div>
                                    <div className="text-green-500 flex items-center">
                                        Alu<input className="ml-2" type="checkbox" name="Matière" value="Alu"/>
                                    </div>
                                </div>  
                            </fieldset>     
                        <div className="flex justify-end">
                            <button className="btn text-xs lg:text-base hover:ring drop-shadow-3xl">Envoyer</button>
                        </div>
                    </form>
                </section>
        </main>
    )
}

export default ContactForm