import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics=({title, stats}) => {
    return (
        <section className="statistics">
        <h2 className="title">{title}</h2>
      
        <ul className="stat-list">
            {stats.map(elem => <li className="item" key={elem.id}>
                <span className="label">{elem.label}</span>
            <span className="percentage">{elem.percentage}</span>
            </li> )}
        </ul>
      </section> 
    )
}