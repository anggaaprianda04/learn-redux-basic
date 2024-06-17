const Label = (props) => {
  const { htmlFor, children } = props;
  return (
    <label className="text-lg font-bold text-slate-500" htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default Label;
