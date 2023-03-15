/* eslint no-use-before-define: 0 */
import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import styles from "./test.module.css";

const Test = () => {
  const [typeTest, setTypeTest] = useState<boolean>(true);
  const [buzzBazz, setBuzzBazz] = useState<string[]>([]);
  const [pokemonArray, setPokemonArray] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const pokemon = [
    "audino",
    "bagon",
    "baltoy",
    "banette",
    "bidoof",
    "braviary",
    "bronzor",
    "carracosta",
    "charmeleon",
    "cresselia",
    "croagunk",
    "darmanitan",
    "deino",
    "emboar",
    "emolga",
    "exeggcute",
    "gabite",
    "girafarig",
    "gulpin",
    "haxorus",
    "heatmor",
    "heatran",
    "ivysaur",
    "jellicent",
    "jumpluff",
    "kangaskhan",
    "kricketune",
    "landorus",
    "ledyba",
    "loudred",
    "lumineon",
    "lunatone",
    "machamp",
    "magnezone",
    "mamoswine",
    "nosepass",
    "petilil",
    "pidgeotto",
    "pikachu",
    "pinsir",
    "poliwrath",
    "poochyena",
    "porygon2",
    "porygonz",
    "registeel",
    "relicanth",
    "remoraid",
    "rufflet",
    "sableye",
    "scolipede",
    "scrafty",
    "seaking",
    "sealeo",
    "silcoon",
    "simisear",
    "snivy",
    "snorlax",
    "spoink",
    "starly",
    "tirtouga",
    "trapinch",
    "treecko",
    "tyrogue",
    "vigoroth",
    "vulpix",
    "wailord",
    "wartortle",
    "whismur",
    "wingull",
    "yamask",
  ];
  // conditional render for logic tests
  const handleTest = () => {
    setTypeTest(!typeTest);
  };
  const handlBuzzBazz = () => {
    let buzzBazz: any = [];
    for (let i = 0; i <= 100; i++) {
      //print 0
      if (i === 0) buzzBazz.push(0);
      //print pairs and multiples of 5
      else if (i % 5 === 0 && i % 2 === 0) buzzBazz.push("buzz bazz");
      //print pair numbers
      else if (i % 2 === 0) buzzBazz.push("buzz");
      //print multiples of 5
      else if (i % 5 === 0) buzzBazz.push("bazz");
      //print rest of numbers
      else buzzBazz.push(i);
    }
    //update the state with the new array
    setBuzzBazz(buzzBazz);
  };

  const endsWith = (word: string) => word[word.length - 1];
  const getCandidates = (words: Array<string>, used: string) =>
    words.filter((e) => !used.includes(e));
  const buildLookup = (words: Array<string>) => {
    const lookup = new Map();
    words.forEach((e) => {
      const start = e[0];
      lookup.set(start, [...(lookup.get(start) || []), e]);
    });
    return lookup;
  };

  const findPaths = (names: Array<string>) => {
    const lookup = buildLookup(names);
    let maxNum = 0;
    let maxPaths: Array<string> = [];
    const parseResult = (arr: any) => {
      if (typeof arr[0] === "object") {
        arr.forEach((el: any) => parseResult(el));
      } else {
        if (arr.length > maxNum) {
          maxNum = arr.length;
          maxPaths = [arr];
        }
        if (arr.length === maxNum) {
          maxPaths.push(arr);
        }
      }
      setPokemonArray(maxPaths[0]);
    };

    const searchWords: any = (word: any, res: any) => {
      const cs = getCandidates(lookup.get(endsWith(word)) || [], res);
      return cs.length ? cs.map((e: any) => searchWords(e, [...res, e])) : res;
    };

    names.forEach((word) => {
      const res = searchWords(word, [word]);
      parseResult(res);
    });
  };

  const handlePokemon = () => {
    setLoading(true);
    setTimeout(() => {
      findPaths(pokemon);
    }, 50);
  };

  useEffect(() => {
    if (loading) {
      setLoading(false);
    }
  }, [pokemonArray]);
  if (loading) {
    return (
      <div className={styles.loading}>
        <p>Cargando.... </p>
      </div>
    );
  }
  return (
    <div className={styles.test}>
      <div className={styles.button}>
        <Button
          size="small"
          sx={{ color: "black", backgroundColor: "#ffc300" }}
          variant="contained"
          onClick={handleTest}
        >
          {typeTest
            ? "Click para cambiar a pokemon Test"
            : "Click para cambiar a Buzz Bazz Test"}
        </Button>
      </div>

      {typeTest ? (
        <>
          <div className={styles.text}>
            <p>
              <b> Enunciado: </b>Desarrolla un algoritmo que imprima los números
              del 0 al 100. Adicionalmente debe imprimirse en la misma línea la
              palabra buzz en caso de que el número sea par. Sí el número es
              múltiplo de 5 debe imprimirse en la misma línea la palabra bazz.{" "}
            </p>
          </div>
          <Button
            sx={{ color: "black", backgroundColor: "#ffc300" }}
            size="small"
            onClick={handlBuzzBazz}
          >
            Click Prueba Buzz Bazz
          </Button>
          <div className={styles.listBuzzBazz}>
            {buzzBazz.map((item: string, index: number) => (
              <ul key={index}>
                <li> {item}</li>
              </ul>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className={styles.text}>
            <p>
              <b> Enunciado: </b> (Inglés) Your task in this exercise is as
              follows: Take the following selection of 70 English Pokemon names
              (extracted from Wikipedias list of Pokemon), and generate the/a
              sequence with the highest possible number of Pokemon names where
              the subsequent name starts with the final letter of the preceding
              name. No Pokemon name is to be repeated.
            </p>
          </div>
          <Button onClick={handlePokemon}>Click para test Pokemon </Button>
          <div className={styles.listPokemon}>
            <div>
              <p>
                <b> Lista original: </b>
              </p>
              {pokemon.map((item: string, index: any) => (
                <p key={index}> {item}</p>
              ))}
            </div>
            <div>
              <p>
                <b> Lista de nombre de pokemons </b>{" "}
              </p>
              {pokemonArray.map((item: string, index) => (
                <p key={index}> {item}</p>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Test;
