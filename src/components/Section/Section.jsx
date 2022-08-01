import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <section>
      <h2 className="title">{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};
