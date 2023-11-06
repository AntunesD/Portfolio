import "./Pages.scss";
import React, { useEffect } from "react";
import hljs from 'highlight.js';
import outilArray from "../data/OutilsArray";
import Bulle from "../components/Bulle/Bulle";

function ArgentBank() {

    const filterOutilsParNoms = (nomsRecherche) => {
        return outilArray.filter((outil) => nomsRecherche.includes(outil.nom));
    };

    const nomsRecherche = ["HTML", "CSS", "Sass", "React", "Redux"];
    const outilsFiltres = filterOutilsParNoms(nomsRecherche);


    useEffect(() => {
        // Activer Highlight.js une fois que le composant est monté
        hljs.highlightAll();
    }, []);

    return (
        <section>
            <div>
                <h2>Débuggez le site d'une agence d'événementiel</h2>
                <b>Competences utilisées :</b>
                <div className="competences-pour-se-projet" >
                    {outilsFiltres.map((outil, index) => (
                        <div key={index}>
                            <Bulle logo={outil.logo} />
                        </div>
                    ))}
                </div>
                <b> Vous trouverez également le lien vers le dépôt Github
                    juste en dessous de cette fenêtre.</b>
                <p><b>Argent Bank</b> est un projet réalisé dans le cadre du parcours de formation
                    chez <b>OpenClassrooms</b>. Le but est de transformer un site web d'une banque fictive
                    en une application <b>React</b>, en utilisant également le state manager <b>Redux</b> pour
                    gérer l'état global de l'application.</p>
                <p>Dans cet article, nous verrons ce qui a été mis en place par <b>David J. Antunes</b>.</p>

                <h3>L'initialisation</h3>
                <p>Tout comme le projet Kasa, on a dû repartir de zéro, donc, <b>Create React App</b> et
                    <b> React Router</b> ont été utilisés pour initialiser le projet. </p>
                <p>Mais ce projet avait également besoin de <b>Redux</b> et <b>Redux Toolkit</b>.
                    Voici la commande utilisée pour les installer :</p>
                <pre><code className="language-shell hljs"  >npm install redux <br />
                    npm install @reduxjs/toolkit
                </code></pre>
                <h3>Redux</h3>
                <p><b>Redux</b> sert à gérer les états d'une application React sans avoir à les transmettre de parent à enfant.</p>
                <p><b>Toolkit</b> permet de faciliter et réduire l'écriture dans Redux. Pour ce projet,
                    nous avions besoin de récupérer les données de l'utilisateur ainsi que
                    son token pour interagir correctement avec plusieurs éléments du site. </p>
                <pre>
                    <code className="language-jsx hljs">
                        {`import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    updateToken: (state, action) => {
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { updateToken, setUser } = authSlice.actions;

export default authSlice.reducer;`}
                    </code>
                </pre>
                <p>Avec <b>createSlice</b>, une partie de l'état global a été créée,
                    à laquelle on a donné le nom <b>"auth"</b> et des états
                    initiaux <b>"user: null"</b> et <b>"token: null"</b>. Ensuite,
                    on a nommé et exporté les fonctions qui mettent à jour ces états.</p>
                <p>Ainsi, nous pouvons utiliser les valeurs des états en
                    utilisant <b>useSelector</b> ou les mettre à jour en utilisant <b>dispatch</b>.
                    Voici, à titre d'exemple, un code qui les utilise (attention, ce code
                    n'a pas été utilisé lors du projet) :</p>
                <pre>
                    <code className="language-jsx hljs">
                        {`import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../redux/reducers/AuthReducer";

function CMOI() {
  const dispatch = useDispatch();

  const user = useSelector(state => state.auth.user);

  console.log(user);

  const newUser = "David J. Antunes";

  dispatch(setUser(newUser));
}

export default CMOI;`}
                    </code>
                </pre>
                <h3>Fonction utilitaire avec axios</h3>
                <p>Pendant ce projet, plusieurs appels à l'<b>API</b> étaient
                    nécessaires, <b>David J. Antunes</b> a donc créé
                    une fonction utilitaire qui permettait de les effectuer
                    plus simplement.</p>
                <pre>
                    <code className="language-jsx hljs">
                        {`import axios from "axios";

export const apiRequest = async (method, url, token, data = null) => {
    const headers = {
      accept: "application/json",
      "Content-Type": "application/json",
    };
    if (token) {
      headers.Authorization = "Bearer $'{token}";
    }
  
    const baseURL = "http://localhost:3001/api/v1/user";
  
    const axiosConfig = {
      baseURL,
      url,
      method,
      headers,
    };
  
    if (data !== null) {
      axiosConfig.data = data;
    }
  
    try {
      const response = await axios.request(axiosConfig);
  
      return response.data;
    } catch (error) {
      throw error;
    }
  };`}
                    </code>
                </pre>
                <p>Ainsi, il suffit d'écrire <b>apiRequest</b> avec entre parenthèses
                 la <b>méthode</b> ("post", "get", etc.), un bout 
                 d'<b>URL</b> (par exemple, "/Profile"), et, si nécessaire, le <b>token</b> et
                  les <b>données</b>.</p>
                <h3>Le swagger</h3>
                <p>Enfin dans se projet la rédaction d'un <b>swagger</b> a était demandé. </p>
                <p><b>Swagger</b> est un ensemble d'outils qui permet de concevoir, documenter 
                    et tester des API de manière efficace.</p>
                <p>Vous pouvez parcourir le rendu du swagger sur l'image si dessous :</p>
                <img className="swagger" src="./Image/ArgentBank/Swagger.png" alt="swagger" />
                <p>
                    <b>Voilà les principales fonctionnalités implémentées sur ce projet. N'hésitez pas
                        à parcourir le code sur GitHub.</b>
                </p>
            </div>
        </section>
    )
}

export default ArgentBank