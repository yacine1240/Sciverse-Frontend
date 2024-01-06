import { GoHomeFill } from "react-icons/go";
import { IoStar } from "react-icons/io5";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaFilter } from "react-icons/fa";
import { routes } from "../routes/routes";

export const navLinks = [
  { href: routes.HOME, label: "Home", icon: GoHomeFill },
  { href: routes.FAVORITE, label: "Favorite", icon: IoStar },
  { href: routes.HISTORY, label: "History", icon: FaClockRotateLeft },
];

export const filterInitialization = [
  { checked: true, label: "Title", id: "title", value: "" },
  { checked: true, label: "Author", id: "author", value: "" },
  { checked: true, label: "Institution", id: "institution", value: "" },
  { checked: true, label: "Keywords", id: "keyWords", value: "" },
  { checked: true, label: "References", id: "references", value: "" },
];

export const optionsNature = [
  { value: "student", label: "Student" },
  { value: "professor", label: "Professor" },
  { value: "researcher", label: "Researcher" },
];

export const optionsField = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export const variantSignLgAbove = {
  initialEllipse1: { left: "-7%" },
  exitEllipse1: { left: "25%" },
  initialEllipse2: { left: "65%" },
  exitEllipse2: { left: "-5%" },
};

export const variantSignMaxSm = {
  initialEllipse1: { left: "-143%" },
  exitEllipse1: { left: "0%" },
  initialEllipse2: { left: "40%" },
  exitEllipse2: { left: "-55%" },
};

export const variantSignMaxLg = {
  initialEllipse1: { left: "-80%" },
  exitEllipse1: { left: "18%" },
  initialEllipse2: { left: "50%" },
  exitEllipse2: { left: "-50%" },
};

export const variantHeaderLgAbove = {
  initialEllipse1: { x: 0 },
  exitEllipse1: { left: "-7%" },
  initialEllipse2: { x: 0 },
  exitEllipse2: { left: "65%" },
};

export const variantHeaderMaxSm = {
  initialEllipse1: { x: 0 },
  exitEllipse1: { left: "-143%" },
  initialEllipse2: { x: 0 },
  exitEllipse2: { left: "40%" },
};

export const variantHeaderMaxLg = {
  initialEllipse1: { x: 0 },
  exitEllipse1: { left: "-80%" },
  initialEllipse2: { x: 0 },
  exitEllipse2: { left: "50%" },
};

export const articlesArray = [
  {
    title: "Article numéro 01 ",
    abstract:
      "hnaya ydji le debut ta3 hada le paragraphe qui abstract l’article(the abstract hadak) juste sneak peak 9iss la taille hadi ou a la fin nkhbtoh b le fameux iuadfzejcznxoqen xenqoedoe dihxonf exjnjex oxnjze cjezo  heehhhhhhhhhhhhhhhhhhhhhhhhkkkkkkkkkkfjduehze diejcjezncjezncozejcnoxncdnefoeifiojoijdiosjdoijoqsqnjxcndsoncoizcozicnonofoi efoizjfoizejfoizjf jdhfgnfdb hiurghuiklerfhjklghwerilohg9u8iqr3ehi iugwifugiusdbvk,jh  uyfsdudyfgvkjhs uyfuyasdgf ",
    keywords: ["Tag 01", "Tag 02", "Tag 03", "Tag 04"],
    authors: [
      {
        name: "flenn benflenn",
        institutions: [
          { institutions_name: "institut 1" },
          { institutions_name: "institut 2" },
        ],
      },
      {
        name: "flenn benflenn",
        institutions: [
          { institutions_name: "institut 1" },
          { institutions_name: "institut 2" },
        ],
      },
    ],
  },
  {
    title: "Article numéro 02 ",
    abstract:
      "hnaya ydji le debut ta3 hada le paragraphe qui abstract l’article(the abstract hadak) juste sneak peak 9iss la taille hadi ou a la fin nkhbtoh b le fameux iuadfzejcznxoqen xenqoedoe dihxonf exjnjex oxnjze cjezo  heehhhhhhhhhhhhhhhhhhhhhhhhkkkkkkkkkkfjduehze diejcjezncjezncozejcnoxncdnefoeifiojoijdiosjdoijoqsqnjxcndsoncoizcozicnonofoi efoizjfoizejfoizjf jdhfgnfdb hiurghuiklerfhjklghwerilohg9u8iqr3ehi iugwifugiusdbvk,jh  uyfsdudyfgvkjhs uyfuyasdgf ",
    keywords: ["Tag 01", "Tag 02", "Tag 03", "Tag 04"],
    authors: [
      {
        name: "flenn benflenn",
        institutions: [
          { institutions_name: "institut 1" },
          { institutions_name: "institut 2" },
        ],
      },
      {
        name: "flenn benflenn",
        institutions: [
          { institutions_name: "institut 1" },
          { institutions_name: "institut 2" },
        ],
      },
    ],
  },
  {
    title: "Article numéro 03 ",
    abstract:
      "hnaya ydji le debut ta3 hada le paragraphe qui abstract l’article(the abstract hadak) juste sneak peak 9iss la taille hadi ou a la fin nkhbtoh b le fameux iuadfzejcznxoqen xenqoedoe dihxonf exjnjex oxnjze cjezo  heehhhhhhhhhhhhhhhhhhhhhhhhkkkkkkkkkkfjduehze diejcjezncjezncozejcnoxncdnefoeifiojoijdiosjdoijoqsqnjxcndsoncoizcozicnonofoi efoizjfoizejfoizjf jdhfgnfdb hiurghuiklerfhjklghwerilohg9u8iqr3ehi iugwifugiusdbvk,jh  uyfsdudyfgvkjhs uyfuyasdgf ",
    keywords: ["Tag 01", "Tag 02", "Tag 03", "Tag 04"],
    authors: [
      {
        name: "flenn benflenn",
        institutions: [
          { institutions_name: "institut 1" },
          { institutions_name: "institut 2" },
        ],
      },
      {
        name: "flenn benflenn",
        institutions: [
          { institutions_name: "institut 1" },
          { institutions_name: "institut 2" },
        ],
      },
    ],
  },
];

export const moderatorsArray = [
  { 
      nom: "titre 01",
      prenom: "titre 002",
      "surnom": "user1",
      "role": "moderateur",
      "mail": "idk@dok.com",
      "photo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEX///8AAACvr6/p6en19fXf39++vr57e3s/Pz/x8fHU1NRTU1P8/PykpKTExMSAgICKiopvb29OTk4gICDMzMwlJSWbm5uQkJAPDw+rq6teXl62trZDQ0MaGho0NDTR0dEtLS1nZ2fV4zZcAAADhUlEQVR4nO3cibKiMBAFUMMqqIgLT3B///+TUwyFOiqSxkCnmXu+oG8BTUISJhMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgE8WB4zhBHHEX0gu3WOWqlq8Kl7sgs7xgr57tgzl3WeYcpi/5StMDd2GG+LO3+Uozn7s4E4rGfKWCu7zvrT4GVGrFXeCX5s13aG0vuuHMX1voyCKGGgGVCrnL7G6hFVCpBXehXcWaAZWKuUvt6Kid8CjzUXS0AyrlcBfbSd4e7CbnLrYLyiWUeRHfj7abTLnLpdNvpBV57fSHmPCHu2CyNTHhmrtgqmhDTLiR9vGG+hjKexATcsKEu2SizzP7d6TN9qmtVF4z3ZET7rhLJhp/Qt3J7520aXBAThhwl0w0/vehS5kdlnJxSzX6nzAqR+6CyVJiwpS7YLItMeGWu2C6jBQw4y63A9q4TdqYreSREnrc5XZBGbhJG7JVvJN2wJPIS0gZuUkbsd0sNQMuuQvtzNP74LaWuS7zl3vWCHgWNyJ95La/9zPRASeTqO0qnqV9J331ebvJSvAzeHNo/vy9Gcm+r6hpJpXKv0Nrfvp6HTep8BbzxAvCx5CnMBA6UPvITRa7ZbjcLZJxXT0AAAD4v8xdP75cLrHvjm/E5m2LcJ09nHvK1mGxHUtOL0mvDbOna5qITxkFvx+n+Er9HiSHvIQ6K8F5KG2Buxa0n5epzSR+9A6Ie4SlZYypy/hKHSXdq57eaaBnoZiek1B3mtRyGbdqxwso5zL6tA7zbGr9uVn63uBnlt+p9C2Jr6zepEjdCPWexdujdFe121i76m0qoLURzdyiFStvVBNN5s7CdvP9a+Jf1h0w8Q0HVMqyV79Hn0u0Odo1gDPXRu+saqimH8KKRY+iRz1sqCez5z7t4x4tWXOfmu+jNVv6qf43NaoZd7QK9dwBhR1nFKintimsOOHd5yW04yLq/Cipuz13vD4baYW/nZqcFb7DPlP0mtYGTblyD2z67TMl7l7zzQduPcz/Opvrn/zp6sS7E5x+oJmOd9WN/nMIOt6jif0Nuu94h98DBFSKM2DfA5oK57DmMEhCzmMnQzQa3lbT9gtdMzh/xPvdirYuzv/x9T+iKW0YEw4SUCm+cRvtpwLd8R1xcwdKyHdMapgXPucrPyqcQYznICYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAF/gCjJCphADpLTwAAAABJRU5ErkJggg=="
  },
  { 
      nom: "titre 01",
      "prenom": "titre 02",
      "surnom": "user2",
      "role": "moderateur",
      "mail": "idk@dok.com",
      "photo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEX///8AAACvr6/p6en19fXf39++vr57e3s/Pz/x8fHU1NRTU1P8/PykpKTExMSAgICKiopvb29OTk4gICDMzMwlJSWbm5uQkJAPDw+rq6teXl62trZDQ0MaGho0NDTR0dEtLS1nZ2fV4zZcAAADhUlEQVR4nO3cibKiMBAFUMMqqIgLT3B///+TUwyFOiqSxkCnmXu+oG8BTUISJhMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgE8WB4zhBHHEX0gu3WOWqlq8Kl7sgs7xgr57tgzl3WeYcpi/5StMDd2GG+LO3+Uozn7s4E4rGfKWCu7zvrT4GVGrFXeCX5s13aG0vuuHMX1voyCKGGgGVCrnL7G6hFVCpBXehXcWaAZWKuUvt6Kid8CjzUXS0AyrlcBfbSd4e7CbnLrYLyiWUeRHfj7abTLnLpdNvpBV57fSHmPCHu2CyNTHhmrtgqmhDTLiR9vGG+hjKexATcsKEu2SizzP7d6TN9qmtVF4z3ZET7rhLJhp/Qt3J7520aXBAThhwl0w0/vehS5kdlnJxSzX6nzAqR+6CyVJiwpS7YLItMeGWu2C6jBQw4y63A9q4TdqYreSREnrc5XZBGbhJG7JVvJN2wJPIS0gZuUkbsd0sNQMuuQvtzNP74LaWuS7zl3vWCHgWNyJ95La/9zPRASeTqO0qnqV9J331ebvJSvAzeHNo/vy9Gcm+r6hpJpXKv0Nrfvp6HTep8BbzxAvCx5CnMBA6UPvITRa7ZbjcLZJxXT0AAAD4v8xdP75cLrHvjm/E5m2LcJ09nHvK1mGxHUtOL0mvDbOna5qITxkFvx+n+Er9HiSHvIQ6K8F5KG2Buxa0n5epzSR+9A6Ie4SlZYypy/hKHSXdq57eaaBnoZiek1B3mtRyGbdqxwso5zL6tA7zbGr9uVn63uBnlt+p9C2Jr6zepEjdCPWexdujdFe121i76m0qoLURzdyiFStvVBNN5s7CdvP9a+Jf1h0w8Q0HVMqyV79Hn0u0Odo1gDPXRu+saqimH8KKRY+iRz1sqCez5z7t4x4tWXOfmu+jNVv6qf43NaoZd7QK9dwBhR1nFKintimsOOHd5yW04yLq/Cipuz13vD4baYW/nZqcFb7DPlP0mtYGTblyD2z67TMl7l7zzQduPcz/Opvrn/zp6sS7E5x+oJmOd9WN/nMIOt6jif0Nuu94h98DBFSKM2DfA5oK57DmMEhCzmMnQzQa3lbT9gtdMzh/xPvdirYuzv/x9T+iKW0YEw4SUCm+cRvtpwLd8R1xcwdKyHdMapgXPucrPyqcQYznICYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAF/gCjJCphADpLTwAAAABJRU5ErkJggg=="
  },
  { 
      nom: "titre 01",
      "prenom": "titre 02",
      "surnom": "user3",
      "role": "moderateur",
      "mail": "idk@dok.com",
      "photo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEX///8AAACvr6/p6en19fXf39++vr57e3s/Pz/x8fHU1NRTU1P8/PykpKTExMSAgICKiopvb29OTk4gICDMzMwlJSWbm5uQkJAPDw+rq6teXl62trZDQ0MaGho0NDTR0dEtLS1nZ2fV4zZcAAADhUlEQVR4nO3cibKiMBAFUMMqqIgLT3B///+TUwyFOiqSxkCnmXu+oG8BTUISJhMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgE8WB4zhBHHEX0gu3WOWqlq8Kl7sgs7xgr57tgzl3WeYcpi/5StMDd2GG+LO3+Uozn7s4E4rGfKWCu7zvrT4GVGrFXeCX5s13aG0vuuHMX1voyCKGGgGVCrnL7G6hFVCpBXehXcWaAZWKuUvt6Kid8CjzUXS0AyrlcBfbSd4e7CbnLrYLyiWUeRHfj7abTLnLpdNvpBV57fSHmPCHu2CyNTHhmrtgqmhDTLiR9vGG+hjKexATcsKEu2SizzP7d6TN9qmtVF4z3ZET7rhLJhp/Qt3J7520aXBAThhwl0w0/vehS5kdlnJxSzX6nzAqR+6CyVJiwpS7YLItMeGWu2C6jBQw4y63A9q4TdqYreSREnrc5XZBGbhJG7JVvJN2wJPIS0gZuUkbsd0sNQMuuQvtzNP74LaWuS7zl3vWCHgWNyJ95La/9zPRASeTqO0qnqV9J331ebvJSvAzeHNo/vy9Gcm+r6hpJpXKv0Nrfvp6HTep8BbzxAvCx5CnMBA6UPvITRa7ZbjcLZJxXT0AAAD4v8xdP75cLrHvjm/E5m2LcJ09nHvK1mGxHUtOL0mvDbOna5qITxkFvx+n+Er9HiSHvIQ6K8F5KG2Buxa0n5epzSR+9A6Ie4SlZYypy/hKHSXdq57eaaBnoZiek1B3mtRyGbdqxwso5zL6tA7zbGr9uVn63uBnlt+p9C2Jr6zepEjdCPWexdujdFe121i76m0qoLURzdyiFStvVBNN5s7CdvP9a+Jf1h0w8Q0HVMqyV79Hn0u0Odo1gDPXRu+saqimH8KKRY+iRz1sqCez5z7t4x4tWXOfmu+jNVv6qf43NaoZd7QK9dwBhR1nFKintimsOOHd5yW04yLq/Cipuz13vD4baYW/nZqcFb7DPlP0mtYGTblyD2z67TMl7l7zzQduPcz/Opvrn/zp6sS7E5x+oJmOd9WN/nMIOt6jif0Nuu94h98DBFSKM2DfA5oK57DmMEhCzmMnQzQa3lbT9gtdMzh/xPvdirYuzv/x9T+iKW0YEw4SUCm+cRvtpwLd8R1xcwdKyHdMapgXPucrPyqcQYznICYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAF/gCjJCphADpLTwAAAABJRU5ErkJggg=="
  },
  { 
      nom: "titre 01",
      "prenom": "titre 02",
      "surnom": "user4",
      "role": "moderateur",
      "mail": "idk@dok.com",
      "photo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEX///8AAACvr6/p6en19fXf39++vr57e3s/Pz/x8fHU1NRTU1P8/PykpKTExMSAgICKiopvb29OTk4gICDMzMwlJSWbm5uQkJAPDw+rq6teXl62trZDQ0MaGho0NDTR0dEtLS1nZ2fV4zZcAAADhUlEQVR4nO3cibKiMBAFUMMqqIgLT3B///+TUwyFOiqSxkCnmXu+oG8BTUISJhMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgE8WB4zhBHHEX0gu3WOWqlq8Kl7sgs7xgr57tgzl3WeYcpi/5StMDd2GG+LO3+Uozn7s4E4rGfKWCu7zvrT4GVGrFXeCX5s13aG0vuuHMX1voyCKGGgGVCrnL7G6hFVCpBXehXcWaAZWKuUvt6Kid8CjzUXS0AyrlcBfbSd4e7CbnLrYLyiWUeRHfj7abTLnLpdNvpBV57fSHmPCHu2CyNTHhmrtgqmhDTLiR9vGG+hjKexATcsKEu2SizzP7d6TN9qmtVF4z3ZET7rhLJhp/Qt3J7520aXBAThhwl0w0/vehS5kdlnJxSzX6nzAqR+6CyVJiwpS7YLItMeGWu2C6jBQw4y63A9q4TdqYreSREnrc5XZBGbhJG7JVvJN2wJPIS0gZuUkbsd0sNQMuuQvtzNP74LaWuS7zl3vWCHgWNyJ95La/9zPRASeTqO0qnqV9J331ebvJSvAzeHNo/vy9Gcm+r6hpJpXKv0Nrfvp6HTep8BbzxAvCx5CnMBA6UPvITRa7ZbjcLZJxXT0AAAD4v8xdP75cLrHvjm/E5m2LcJ09nHvK1mGxHUtOL0mvDbOna5qITxkFvx+n+Er9HiSHvIQ6K8F5KG2Buxa0n5epzSR+9A6Ie4SlZYypy/hKHSXdq57eaaBnoZiek1B3mtRyGbdqxwso5zL6tA7zbGr9uVn63uBnlt+p9C2Jr6zepEjdCPWexdujdFe121i76m0qoLURzdyiFStvVBNN5s7CdvP9a+Jf1h0w8Q0HVMqyV79Hn0u0Odo1gDPXRu+saqimH8KKRY+iRz1sqCez5z7t4x4tWXOfmu+jNVv6qf43NaoZd7QK9dwBhR1nFKintimsOOHd5yW04yLq/Cipuz13vD4baYW/nZqcFb7DPlP0mtYGTblyD2z67TMl7l7zzQduPcz/Opvrn/zp6sS7E5x+oJmOd9WN/nMIOt6jif0Nuu94h98DBFSKM2DfA5oK57DmMEhCzmMnQzQa3lbT9gtdMzh/xPvdirYuzv/x9T+iKW0YEw4SUCm+cRvtpwLd8R1xcwdKyHdMapgXPucrPyqcQYznICYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAF/gCjJCphADpLTwAAAABJRU5ErkJggg=="
  }
]

export const moderator ={ 
      nom: "titre 01",
      "prenom": "titre 002",
      "surnom": "user1",
      "role": "moderateur",
      "mail": "idk@dok.com",
      "photo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEX///8AAACvr6/p6en19fXf39++vr57e3s/Pz/x8fHU1NRTU1P8/PykpKTExMSAgICKiopvb29OTk4gICDMzMwlJSWbm5uQkJAPDw+rq6teXl62trZDQ0MaGho0NDTR0dEtLS1nZ2fV4zZcAAADhUlEQVR4nO3cibKiMBAFUMMqqIgLT3B///+TUwyFOiqSxkCnmXu+oG8BTUISJhMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgE8WB4zhBHHEX0gu3WOWqlq8Kl7sgs7xgr57tgzl3WeYcpi/5StMDd2GG+LO3+Uozn7s4E4rGfKWCu7zvrT4GVGrFXeCX5s13aG0vuuHMX1voyCKGGgGVCrnL7G6hFVCpBXehXcWaAZWKuUvt6Kid8CjzUXS0AyrlcBfbSd4e7CbnLrYLyiWUeRHfj7abTLnLpdNvpBV57fSHmPCHu2CyNTHhmrtgqmhDTLiR9vGG+hjKexATcsKEu2SizzP7d6TN9qmtVF4z3ZET7rhLJhp/Qt3J7520aXBAThhwl0w0/vehS5kdlnJxSzX6nzAqR+6CyVJiwpS7YLItMeGWu2C6jBQw4y63A9q4TdqYreSREnrc5XZBGbhJG7JVvJN2wJPIS0gZuUkbsd0sNQMuuQvtzNP74LaWuS7zl3vWCHgWNyJ95La/9zPRASeTqO0qnqV9J331ebvJSvAzeHNo/vy9Gcm+r6hpJpXKv0Nrfvp6HTep8BbzxAvCx5CnMBA6UPvITRa7ZbjcLZJxXT0AAAD4v8xdP75cLrHvjm/E5m2LcJ09nHvK1mGxHUtOL0mvDbOna5qITxkFvx+n+Er9HiSHvIQ6K8F5KG2Buxa0n5epzSR+9A6Ie4SlZYypy/hKHSXdq57eaaBnoZiek1B3mtRyGbdqxwso5zL6tA7zbGr9uVn63uBnlt+p9C2Jr6zepEjdCPWexdujdFe121i76m0qoLURzdyiFStvVBNN5s7CdvP9a+Jf1h0w8Q0HVMqyV79Hn0u0Odo1gDPXRu+saqimH8KKRY+iRz1sqCez5z7t4x4tWXOfmu+jNVv6qf43NaoZd7QK9dwBhR1nFKintimsOOHd5yW04yLq/Cipuz13vD4baYW/nZqcFb7DPlP0mtYGTblyD2z67TMl7l7zzQduPcz/Opvrn/zp6sS7E5x+oJmOd9WN/nMIOt6jif0Nuu94h98DBFSKM2DfA5oK57DmMEhCzmMnQzQa3lbT9gtdMzh/xPvdirYuzv/x9T+iKW0YEw4SUCm+cRvtpwLd8R1xcwdKyHdMapgXPucrPyqcQYznICYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAF/gCjJCphADpLTwAAAABJRU5ErkJggg=="
  }

export const User = {
  nom: "titre 01",
  "prenom": "titre 02",
  "surnom": "user4",
  "role": "moderateur",
  "mail": "idk@dok.com",
  "photo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEX///8AAACvr6/p6en19fXf39++vr57e3s/Pz/x8fHU1NRTU1P8/PykpKTExMSAgICKiopvb29OTk4gICDMzMwlJSWbm5uQkJAPDw+rq6teXl62trZDQ0MaGho0NDTR0dEtLS1nZ2fV4zZcAAADhUlEQVR4nO3cibKiMBAFUMMqqIgLT3B///+TUwyFOiqSxkCnmXu+oG8BTUISJhMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgE8WB4zhBHHEX0gu3WOWqlq8Kl7sgs7xgr57tgzl3WeYcpi/5StMDd2GG+LO3+Uozn7s4E4rGfKWCu7zvrT4GVGrFXeCX5s13aG0vuuHMX1voyCKGGgGVCrnL7G6hFVCpBXehXcWaAZWKuUvt6Kid8CjzUXS0AyrlcBfbSd4e7CbnLrYLyiWUeRHfj7abTLnLpdNvpBV57fSHmPCHu2CyNTHhmrtgqmhDTLiR9vGG+hjKexATcsKEu2SizzP7d6TN9qmtVF4z3ZET7rhLJhp/Qt3J7520aXBAThhwl0w0/vehS5kdlnJxSzX6nzAqR+6CyVJiwpS7YLItMeGWu2C6jBQw4y63A9q4TdqYreSREnrc5XZBGbhJG7JVvJN2wJPIS0gZuUkbsd0sNQMuuQvtzNP74LaWuS7zl3vWCHgWNyJ95La/9zPRASeTqO0qnqV9J331ebvJSvAzeHNo/vy9Gcm+r6hpJpXKv0Nrfvp6HTep8BbzxAvCx5CnMBA6UPvITRa7ZbjcLZJxXT0AAAD4v8xdP75cLrHvjm/E5m2LcJ09nHvK1mGxHUtOL0mvDbOna5qITxkFvx+n+Er9HiSHvIQ6K8F5KG2Buxa0n5epzSR+9A6Ie4SlZYypy/hKHSXdq57eaaBnoZiek1B3mtRyGbdqxwso5zL6tA7zbGr9uVn63uBnlt+p9C2Jr6zepEjdCPWexdujdFe121i76m0qoLURzdyiFStvVBNN5s7CdvP9a+Jf1h0w8Q0HVMqyV79Hn0u0Odo1gDPXRu+saqimH8KKRY+iRz1sqCez5z7t4x4tWXOfmu+jNVv6qf43NaoZd7QK9dwBhR1nFKintimsOOHd5yW04yLq/Cipuz13vD4baYW/nZqcFb7DPlP0mtYGTblyD2z67TMl7l7zzQduPcz/Opvrn/zp6sS7E5x+oJmOd9WN/nMIOt6jif0Nuu94h98DBFSKM2DfA5oK57DmMEhCzmMnQzQa3lbT9gtdMzh/xPvdirYuzv/x9T+iKW0YEw4SUCm+cRvtpwLd8R1xcwdKyHdMapgXPucrPyqcQYznICYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAF/gCjJCphADpLTwAAAABJRU5ErkJggg=="
}

export const article = {
  "titre": "titre 01",
    "resume": "lotem lotem lotem lotem lotem lotem lotem lotem lotem lotem lotem lotem lotem lotem lotem lotem lotem lotem lotem lotem lotem lotem lotem lotem lotem lotem lotem lotem lotem lotem lotem lotem lotem lotem lotem lotem lotem lotem lotem lotem lotem lotem lotem lotem lotem lotem lotem lotem lotem lotem lotem lotem",
    "texte_integral": "Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore beatae rem dolorem? Modi quasi velit impedit architecto repellat aperiam reprehenderit praesentium distinctio in odio maxime optio, eaque sint eveniet ipsam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae vel corrupti nam.Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore beatae rem dolorem? Modi quasi velit impedit architecto repellat aperiam reprehenderit praesentium distinctio in odio maxime optio, eaque sint eveniet ipsam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae vel corrupti nam.Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore beatae rem dolorem? Modi quasi velit impedit architecto repellat aperiam reprehenderit praesentium distinctio in odio maxime optio, eaque sint eveniet ipsam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae vel corrupti nam.Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore beatae rem dolorem? Modi quasi velit impedit architecto repellat aperiam reprehenderit praesentium distinctio in odio maxime optio, eaque sint eveniet ipsam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae vel corrupti nam.Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore beatae rem dolorem? Modi quasi velit impedit architecto repellat aperiam reprehenderit praesentium distinctio in odio maxime optio, eaque sint eveniet ipsam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae vel corrupti nam.Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore beatae rem dolorem? Modi quasi velit impedit architecto repellat aperiam reprehenderit praesentium distinctio in odio maxime optio, eaque sint eveniet ipsam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae vel corrupti nam.Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore beatae rem dolorem? Modi quasi velit impedit architecto repellat aperiam reprehenderit praesentium distinctio in odio maxime optio, eaque sint eveniet ipsam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae vel corrupti nam.Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore beatae rem dolorem? Modi quasi velit impedit architecto repellat aperiam reprehenderit praesentium distinctio in odio maxime optio, eaque sint eveniet ipsam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae vel corrupti nam.Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore beatae rem dolorem? Modi quasi velit impedit architecto repellat aperiam reprehenderit praesentium distinctio in odio maxime optio, eaque sint eveniet ipsam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae vel corrupti nam.Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore beatae rem dolorem? Modi quasi velit impedit architecto repellat aperiam reprehenderit praesentium distinctio in odio maxime optio, eaque sint eveniet ipsam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae vel corrupti nam.Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore beatae rem dolorem? Modi quasi velit impedit architecto repellat aperiam reprehenderit praesentium distinctio in odio maxime optio, eaque sint eveniet ipsam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae vel corrupti nam.Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore beatae rem dolorem? Modi quasi velit impedit architecto repellat aperiam reprehenderit praesentium distinctio in odio maxime optio, eaque sint eveniet ipsam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae vel corrupti nam.Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore beatae rem dolorem? Modi quasi velit impedit architecto repellat aperiam reprehenderit praesentium distinctio in odio maxime optio, eaque sint eveniet ipsam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae vel corrupti nam.",
    "url_pdf": "https://www.i2m.univ-amu.fr/perso/thierry.gallouet/licence.d/anum.d/anamat-tg.pdf", 
    "mot_cle": ["idk1", "odk2", "okeyy", "main non","idk1", "odk2 ", "okeyy", "main non"],
    "auteurs": [
         { 
            nom: "boualem",
            "prenom": "titiche",
            "email": "", 
            "institutions": [
                    {"nom_institution": "aa"}, 
                    {"nom_institution": "bb"} 
                ] },
        { 
            nom: "hamid",
            "prenom": "zerhouni", 
            "email": "", 
            "institutions": [ 
                {"nom_institution": "cc"}, 
                {"nom_institution": "dd"} 
            ] } ],
    "references": [
        "Référence 1:", 
        "Référence 2: " ],
    "created_at": { "type": "date" } 
}