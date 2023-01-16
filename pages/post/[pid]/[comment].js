import { useRouter } from 'next/router'

export default function Comment(){
    const router = useRouter()
    const { comment } = router.query

    return <p>Post: {comment}</p>
}