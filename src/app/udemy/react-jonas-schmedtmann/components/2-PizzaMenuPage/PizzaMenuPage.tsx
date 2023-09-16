"use client";
import { useEffect, useState } from "react";
import { pizzaDataObject } from "@/materials/pizza-menu/data";

export function PizzaMenuPage() {
  const [pizzaData, setPizzaData] = useState(() => pizzaDataObject);
  const [time, setTime] = useState(() => "...Loading");
  const [openOrClosed, setOpenOrClosed] = useState(() => "...Please Wait");
  const amountOfPizzaVariety = pizzaData.length;

  const pizzaSoldOutToggler = function (name: string) {
    setPizzaData((prev) =>
      prev.map((e) => (e.name === name ? { ...e, soldOut: !e.soldOut } : e))
    );
  };

  const [timerVisible, setTimerVisible] = useState(true);
  function timerVisibleToggler() {
    setTimerVisible((p) => !p);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const dateObject = new Date();
      const timeString = dateObject.toLocaleTimeString();
      setTime(timeString);
      const currentHour = dateObject.getHours();
      const currentMinute = dateObject.getMinutes();
      const currentTime = +(
        currentHour.toString() + currentMinute.toString().padStart(2, "0")
      );

      if (currentTime >= 800 && currentTime <= 2230) setOpenOrClosed("open");
      else setOpenOrClosed("closed");
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-xl m-auto">
      <button type="button" onClick={timerVisibleToggler}>
        Toggle Timer Visibility
      </button>
      {timerVisible && (
        <header>
          <h1>Fast React Pizza Co.</h1>
          <p>Time is now {time}</p>
          <p>Store open or closed = {openOrClosed}</p>
        </header>
      )}

      <main>
        <h3>Our Menu</h3>
        <p>
          Authentic Italian Cuisine. {amountOfPizzaVariety} creative dishes to
          choose from. All from our stove oven, all organic, all delicious.
        </p>
        <PizzaMenu pizzaData={pizzaData} handleClick={pizzaSoldOutToggler} />
      </main>
      <footer>
        <p>Were open until 22:00. Come visit us or order online.</p>
        <p>
          Time is now {time}. The store is {openOrClosed}
        </p>
        <button>Order now</button>
      </footer>
    </div>
  );
}

type HandleClick = (name: string) => void;

type TPizzaData = {
  name: string;
  ingredients: string;
  price: number;
  photoName: string;
  soldOut: boolean;
};

type TPizzaMenuCmp = {
  pizzaData: TPizzaData[];
  handleClick: HandleClick;
};

type TIndividualPizzaCmp = TPizzaData & {
  handleClick: HandleClick;
};

function PizzaMenu({ pizzaData, handleClick }: TPizzaMenuCmp) {
  const mappedIndividualPizza = pizzaData.map((el) => {
    const props = {
      name: el.name,
      ingredients: el.ingredients,
      price: el.price,
      photoName: el.photoName,
      soldOut: el.soldOut,
      handleClick,
    };
    return (
      <section key={el.name}>
        <IndividualPizza {...props} />
      </section>
    );
  });

  return <div>{mappedIndividualPizza}</div>;
}

function IndividualPizza({
  name,
  ingredients,
  price,
  photoName,
  soldOut,
  handleClick,
}: TIndividualPizzaCmp) {
  return (
    <div>
      <br />
      <h6>{name}</h6>
      <p>{ingredients}</p>
      <p>{soldOut ? "SOLD OUT" : `$${price}`}</p>
      <button onClick={() => handleClick(name)}>Sold Out Button</button>
    </div>
  );
}

// function greet(person: string): string;
// function greet(persons: string[]): string[];
// function greet(person: string | string[]): string | string[] {
//   if (typeof person === "string") {
//     return `Hello ${person}`;
//   } else if (Array.isArray(person)) {
//     return person.map((p) => `Hello ${p}`);
//   }
//   throw new Error("Unable to greet");
// }
// const person1 = "Ali";
// const person2 = ["Recep", "Tayyar", "Erdoğan"];
// console.log(greet(person2));
