import React from "react";
import SearchBar from "./SearchBar";

// import SearchBar from "./SearchBar";

// A custom component that renders a page with DOM elements
function Page() {
  return (
    <div className="page">
      <h1>Search and Scroll Demo</h1>
      <SearchBar />
      <div className="content">
        <div className="section" id="apple">
          <h2>Apple</h2>
          <p>
            An apple is an edible fruit produced by an apple tree. Apple trees
            are cultivated worldwide and are the most widely grown species in
            the genus Malus. The tree originated in Central Asia, where its wild
            ancestor, Malus sieversii, is still found today.
          </p>
        </div>
        <div className="section" id="banana">
          <h2>Banana</h2>
          <p>
            A banana is an elongated, edible fruit – botanically a berry –
            produced by several kinds of large herbaceous flowering plants in
            the genus Musa. In some countries, bananas used for cooking may be
            called "plantains", distinguishing them from dessert bananas.
          </p>
        </div>
        <div className="section" id="carrot">
          <h2>Carrot</h2>
          <p>
            The carrot is a root vegetable, usually orange in color, though
            purple, black, red, white, and yellow cultivars exist. They are a
            domesticated form of the wild carrot, Daucus carota, native to
            Europe and Southwestern Asia. The plant probably originated in
            Persia and was originally cultivated for its leaves and seeds.
          </p>
        </div>
        <div className="section" id="date">
          <h2>Date</h2>
          <p>
            A date is a sweet fruit from the date palm tree. It is one of the
            oldest cultivated fruits in the world. Dates have been a staple food
            of the Middle East and the Indus Valley for thousands of years.
            There is archaeological evidence of date cultivation in Arabia from
            the 6th millennium BCE.
          </p>
        </div>
        <div className="section" id="eggplant">
          <h2>Eggplant</h2>
          <p>
            Eggplant (US), aubergine (UK), or brinjal (South Asia and South
            Africa) is a plant species in the nightshade family Solanaceae.
            Solanum melongena is grown worldwide for its edible fruit. Most
            commonly purple, the spongy, absorbent fruit is used in various
            cuisines. Typically used as a vegetable in cooking, it is a berry by
            botanical definition.
          </p>
        </div>
        <div className="section" id="fig">
          <h2>Fig</h2>
          <p>
            Ficus carica is an Asian species of flowering plant in the mulberry
            family, known as the common fig. It is the source of the fruit also
            called the fig and as such is an important crop in those areas where
            it is grown commercially. Native to the Middle East and western Asia,
            it has been sought out and cultivated since ancient times and is now
            widely grown throughout the world, both for its fruit and as an
            ornamental plant.
          </p>
        </div>
        <div className="section" id="grape">
          <h2>Grape</h2>
          <p>
            A grape is a fruit, botanically a berry, of the deciduous woody vines
            of the flowering plant genus Vitis. Grapes can be eaten fresh as
            table grapes or they can be used for making wine, jam, grape juice,
            jelly, grape seed extract, raisins, vinegar, and grape seed oil.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;
