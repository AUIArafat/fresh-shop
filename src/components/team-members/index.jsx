import img_1 from '../../assets/images/img-1.jpg';
import img_2 from '../../assets/images/img-2.jpg';
import img_3 from '../../assets/images/img-3.jpg';
import Member from './member';

function TeamMembers() {
    let members = [
        {
            id:1,
            name:"Williamson",
            position:"Web Developer",
            imgSrc:img_1
        },
        {
            id:2,
            name:"Kristiana",
            position:"Web Developer",
            imgSrc:img_2
        },
        {
            id:3,
            name:"Steve Thomas",
            position:"Web Developer",
            imgSrc:img_3
        },
        {
            id:4,
            name:"Williamson",
            position:"Web Developer",
            imgSrc:img_1
        }
    ]
    return(
        <div className="row my-4">
        <div className="col-12">
          <h2 className="noo-sh-title">Meet Our Team</h2>
        </div>
        {members.map(member => (
            <Member member={member} key={member.id}/>
        ))}
      </div>
    
    )
}

export default TeamMembers;