const Select = (prop) => {
  return (
    <label className={prop.classLabel}>
      {prop.label}
      <select value={prop.value} onChange={prop.onChange}>
        {prop.options.map((option,index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
};

export default Select;