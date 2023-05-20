import PropTypes from 'prop-types';

export const Section = ({title, children}) => {
    return (
      <section>
        {<h1>{title}</h1>}
        {children}
      </section>

      );
}

Section.prototype = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};