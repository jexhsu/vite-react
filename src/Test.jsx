import React, { useRef, useEffect } from 'react';

const InputComponent = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    // 在组件加载后设置输入框焦点
    inputRef.current.focus();
  }, []);

  const handleButtonClick = () => {
    // 通过 ref 获取输入框的值
    alert(`Input value: ${inputRef.current.value}`);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleButtonClick}>Alert Input Value</button>
    </div>
  );
};

export default InputComponent;
