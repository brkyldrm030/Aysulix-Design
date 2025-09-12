import React from "react";

const Logoticker = () => {
  return (
    <section id="#logo">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center p-6">
        <div>
          <h1 className="text-white text-sm uppercase">Designers</h1>
          <p className="text-2xl text-white font-bold">150+</p>
        </div>
        <div>
          <h1 className="text-white text-sm uppercase">Clients</h1>
          <p className="text-2xl text-white font-bold">500+</p>
        </div>
        <div>
          <h1 className="text-white text-sm uppercase">Masterpieces</h1>
          <p className="text-2xl text-white font-bold">20K+</p>
        </div>
        <div>
          <h1 className="text-white text-sm uppercase">Events</h1>
          <p className="text-2xl text-white font-bold">50+</p>
        </div>
      </div>
    </section>
  );
};

export default Logoticker;
