import './eachItem.scss';
import avatarka from '../../imgs/avatar.jpg'
import React from 'react'
import { useLocation } from 'react-router-dom';
import { data } from '../data';
import Drewer from '../drewer/drewer';

function EachItem() {

const location=useLocation()
let location1 = location.pathname.split('/').at(-1);


return (
<div className='EachDesc'>
    {
    data.map(el => {
    if(+location1 === el.id){
    return <div className='descMain'>
        <div className='desc__header'>
            <div>
                <img className='avatar' src={avatarka} alt="" />
            </div>
            <p>Published in ILLUMINATION</p>
        </div>

        <div className='desc__text'>
            <div className='desc__imgName'>
                <img src={el.avatar} alt="avatar" />
                <div>
                    <h4>{el.name}</h4>
                    <p>{el.data}{el.read}</p>
                </div>

            </div>
            <h1>{el.title}</h1>
            <img className='desc__bigImg' src={el.img} alt="bigImg" />
            <p>{el.text}</p>
            <p>{el.desc}</p>


            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae mollitia, distinctio, autem in quasi
                aspernatur ut accusamus eaque illum architecto amet quisquam cum officia assumenda modi inventore ipsa
                laborum perspiciatis!</p>

            <Drewer/>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem laboriosam suscipit dolor vero earum.
                Laboriosam sit minima dolorum itaque, vero ex quasi ipsam excepturi harum tempora iste accusantium
                praesentium dolorem.</p>
            <h3>Section 1.10.32 of "de Finibus Bonorum et Malorum"</h3>
            <p>
                , written by Cicero in 45 BC
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
                incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
                vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum
                qui dolorem eum fugiat quo voluptas nulla pariatur?"
            </p>
            <h3> 1914 translation by H. Rackham</h3>
            <p> "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born
                and I will give you a complete account of the system, and expound the actual teachings of the great
                explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids
                pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure
                rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or
                pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances
                occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us
                ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any
                right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one
                who avoids a pain that produces no resultant pleasure?"</p>

            <h3> Section 1.10.33 of "de Finibus Bonorum et Malorum"</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Morbi sodales neque ac velit pretium aliquam.
                Vestibulum eu arcu sit amet lacus tristique euismod.
                Etiam nec velit eu sapien accumsan eleifend eu et turpis.
                Phasellus blandit nibh in mi sagittis, sed luctus felis sagittis.
                Sed condimentum velit sit amet nisl eleifend, eu vestibulum nisl condimentum.
                Proin posuere neque sed dui auctor, sed scelerisque est egestas.
                Vivamus vitae orci sed metus elementum tempus.
                Integer convallis dui vel justo condimentum feugiat eget non felis.
                Nulla eleifend nisl vitae feugiat pulvinar.
                Maecenas nec nisi nec erat faucibus maximus sit amet nec ex.
                Nullam condimentum lacus in dolor consectetur, eleifend malesuada elit aliquam.
                Vivamus mollis diam sit amet tortor accumsan interdum.
                Vivamus egestas turpis sed sem posuere eleifend.</p>
            <p>
                written by Cicero in 45 BC
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
                provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est
                eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
                assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum
                rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
                perferendis doloribus asperiores repellat."
            </p>
            <h3> 1914 translation by H. Rackham</h3>
            <p>

                "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and
                demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the
                pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty
                through weakness of will, which is the same as saying through shrinking from toil and pain. These cases
                are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled
                and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and
                every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of
                business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise
                man therefore always holds in these matters to this principle of selection: he rejects pleasures to
                secure other greater pleasures, or else he endures pains to avoid worse pains."
            </p>
        </div>
    </div>
    }
    })
    }
</div>
)
}

export default EachItem