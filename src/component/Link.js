import useNavigation from "../hooks/use-navigation";
import classNames from "classnames";

function Link({ to, children, className, activeClassName }){
  const {navigate, currentPath} = useNavigation();

  const classes = classNames('text-blue-500',
    className,
    currentPath === to && activeClassName
  );
  const handleClick = (event) => {    
    if(event.metaKey || event.ctrlKey){ // ctrl 키 눌렀을 때 새로운 탭에서 열기
      return;
    }
    event.preventDefault();
    navigate(to);
  }
  return <a className={classes} href={to} onClick={handleClick}>{children}</a>
}

export default Link;

// import classNames from 'classnames';

// function Link({ to, children, className, activeClassName }) {
//     const currentPath = window.location.pathname;
//     console.log(to, currentPath);
//     const classes = classNames(
//       'text-blue-500',d
//       className,
//       currentPath === to && activeClassName
//     );
  
//     const handleClick = (event) => {
//       if (event.metaKey || event.ctrlKey) {
//         return;
//       }
//     //   event.preventDefault();
//     };
  
//     return (
//       <a key={to} className={classes} href={to} onClick={handleClick}>
//         {children}
//       </a>
//     );
//   }
  
//   export default Link;