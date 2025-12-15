import React, { useEffect, useState } from "react";
import "./Repos.css";

function Repos() {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch(
          "https://api.github.com/users/LesanePC/repos?per_page=8&sort=updated"
        );
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error("Ошибка при загрузке репозиториев:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchRepos();
  }, []);

  if (isLoading) {
    return <p>Загрузка репозиториев...</p>;
  }

  return (
    <section className="repos">
      <h3 className="repos__title">Мой GitHub</h3>
      <p className="repos__subtitle">
        Несколько открытых проектов, с которыми сейчас работаю.
      </p>

      <div className="repos__list">
        {repos.map((repo) => (
          <article key={repo.id} className="repos__item">
            <h4 className="repos__name">{repo.name}</h4>
            {repo.description && (
              <p className="repos__desc">{repo.description}</p>
            )}
            <div className="repos__meta">
              {repo.language && (
                <span className="repos__tag">{repo.language}</span>
              )}
              <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="repos__link"
              >
                Смотреть на GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Repos;
