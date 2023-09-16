"use client";
import { useState, useEffect } from "react";

function UseEffectLessonHover() {
  const [hovered, setHovered] = useState<boolean | null>(null);
  const [popup, setPopup] = useState<JSX.Element>(() => <p>Pop-up coming</p>);

  function handleMouseEnter() {
    setHovered(true);
  }
  function handleMouseLeave() {
    setHovered(false);
  }

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;
    if (hovered === true) {
      setPopup(<p>Popup loading...</p>);
      timeoutId = setTimeout(() => {
        setPopup(<div>anan</div>);
      }, 1000);
    } else if (hovered === false) {
      setPopup(<p>Pop-up removed</p>);
      timeoutId = setTimeout(() => {
        setPopup(<p>Pop-up waiting...</p>);
      }, 2000);
    }

    return () => {
      if (timeoutId !== null) clearTimeout(timeoutId);
    };
  }, [hovered]);

  return (
    <div>
      <div>{popup}</div>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {hovered ? "Hovered" : "Not hovered"}
      </div>
    </div>
  );
}

function UseEffectLesson2() {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    function updateWidth() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });
  return <div>{width}</div>;
}

function UseEffectLesson1() {
  const [section, setSection] = useState("");
  const [html, setHtml] = useState<JSX.Element | null>(null);

  useEffect(() => {
    async function getSectionHTML() {
      setHtml(
        <p>
          {section.charAt(0).toUpperCase() + section.slice(1)}
          &nbsp;loading...
        </p>
      );
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/${section}`
      );
      const data: {}[] = await response.json();
      setHtml(
        <>
          <p>
            {section.charAt(0).toUpperCase() + section.slice(1)}
            &nbsp;loaded
          </p>
          <p>
            {data.map((el: any) => (
              <p key={el}>{el.body}</p>
            ))}
          </p>
        </>
      );
      console.log(data);
    }

    section && getSectionHTML();
  }, [section]);

  return (
    <div>
      <button onClick={() => setSection("posts")}>Posts</button>
      <button onClick={() => setSection("users")}>Users</button>
      <button onClick={() => setSection("comments")}>Comments</button>
      <>{section ? html : <p>Click on a button</p>}</>
    </div>
  );
}

export { UseEffectLesson1, UseEffectLesson2, UseEffectLessonHover };
