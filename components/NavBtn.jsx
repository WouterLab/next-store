const NavBtn = (props) => {
  const getIcon = (params) => {
    switch (params) {
      case "chair":
        return <chair />;
      case "table":
        return <table />;
      case "light":
        return <light />;
      case "sofa":
        return <sofa />;
      default:
        return <></>;
    }
  };

  return <div className="w-12 h-12 bg-blue-500 rounded-2xl">{getIcon(props.icon)}</div>;
};

export default NavBtn;
