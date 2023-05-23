const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      <div className="statistics-container">
        {title && <h2 className="title">{title}</h2>}
        <ul className="stat-list">
          {stats.map(({ id, label, percentage }) => (
            <li className="stat-list-item" key={id}>
              <span className="stat-label">{label}</span>
              <span className="stat-percentage">{percentage}%</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Statistics;
