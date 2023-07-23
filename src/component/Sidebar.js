import Link from './Link';

function Sidebar(){
  const links = [
    {label : 'Main', path:'/'},
    {label : 'Signup', path:'/signup'},
  ];

  const renderedLinks = links.map((link)=>{
    return <Link key={link.labe} to ={link.path}>{link.label}</Link>
  });
  return(
    <div className='sticky top-0 overflow-y-scroll flex flex-col'>
      {renderedLinks}
    </div>
  );

}

export default Sidebar;


// import Link from "./Link";
// function Sidebar() {
//   const links = [
//     { label: 'Main', path: '/main' },
//     { label: 'Signup', path: '/signup' },
//   ];

//   const renderedLinks = links.map((link) => {
//     return (
//       <div>
//           <Link
//             key={link.label}
//             to={link.path}
//             className="mb-3"
//             activeClassName="font-bold border-l-4 border-blue-500 pl-2"
//           >
//           {link.label}        
//           </Link>
//       </div>
//     );
//   });

//   return (
//     <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">      
//       {renderedLinks}
//     </div>
//   );
// }

// export default Sidebar;
