export default function Post() {
    return (
      <article className="entry p-16 [ prose md:prose-md lg:-prose-lg ]">
       <p>
       Authentication is the act of validating that a user is who they claim to be. Usernames and passwords are the most common authentication factors.
       </p>
       <p>
       When authenticating a user, if the user enters the correct data, the server assumes that the identity is valid and grants the user access to the server resource.
       </p>
       <p>
       On the other hand, authorization in a security system is the process of giving the user permission to access a specific resource or function on the server. This term is often used interchangeably with access control or client privilege.
       </p>
       <p>
       Usually, authentication precedes authorization; users should first prove that their identities are genuine before the backend administrator grants them access to the requested resources.
       </p>
      </article>
    )
  }