import React from 'react';

function Register() {
  return (
    <div>Register</div>
  );
}

export default Register;

// import Head from "next/head";
// import Link from "next/link";
// import { getProviders, getSession, signIn, signOut } from "next-auth/react";

// const signInButtonNode = (provider) => {
//   const handleSignIn = (e) => {
//     e.preventDefault();
//     // signIn('google', { callbackUrl: '/dashboard' })
//     // console.log(provider.id);
//     signIn(provider.id, {
//       callbackUrl: `${window.location.origin}/dashboard`,
//     });
//   };

//   return (
//     <div key={provider.id}>
//       <Link href="/api/auth/signin" passHref>
//         <button onClick={handleSignIn}>Register with {provider.name}</button>
//       </Link>
//     </div>
//   );
// };

// const signOutButtonNode = () => {
//   const handleSignOut = (e) => {
//     e.preventDefault();
//     signOut({ callbackUrl: "/" });
//   };

//   return (
//     <div>
//       <Link href="/api/auth/signout" passHref>
//         <button onClick={handleSignOut}>Sign Out</button>
//       </Link>
//     </div>
//   );
// };

// const unauthorized = () => {
//   return (
//     <div className="text">You aren&apos;t authorized to view this page</div>
//   );
// };

// const authorized = () => {
//   return <div className="text">Hello world</div>;
// };

// const RegisterPage = ({ session, providers }) => {
//   return (
//     <>
//       <Head>
//         <title>Register Page</title>
//       </Head>

//       {/* <Row>
//         <Col md={{ span: 2, offset: 5 }}>
//           <div
//             style={{ display: "flex", justifyContent: "center" }}
//             className="navbar"
//           >
//             {session ? signOutButtonNode() : signInButtonNode()}
//           </div>
//         </Col>

//         {session ? authorized() : unauthorized()}
//       </Row> */}

//       <div>
//         <div
//           style={{ minHeight: "70vh" }}
//           md={{ span: 4, offset: 4 }}
//           className="d-flex align-items-center"
//         >
//           <div
//             style={{
//               width: "100%",
//               backgroundColor: "#A9B4C2",
//               border: "none",
//             }}
//           >
//             <div className="text-center">
//               <div>
//                 <h1 style={{ color: "black" }}>Register</h1>
//               </div>

//               <br />

//               {session
//                 ? signOutButtonNode()
//                 : Object.values(providers).map((provider) =>
//                   signInButtonNode(provider)
//                 )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export const getServerSideProps = async (ctx) => {
//   const session = await getSession(ctx);
//   const providers = await getProviders();

//   return {
//     props: {
//       session,
//       providers,
//     },
//   };
// };

// export default RegisterPage;
