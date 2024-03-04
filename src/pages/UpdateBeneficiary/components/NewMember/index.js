import MemberCard from '@/components/MemberCard'
import React from 'react'
import styles from './styles.scss'
import AddButton from '@/components/AddButton'
import EmptyList from '@/components/EmptyList'
const memberArray = Array(0).fill(Math.random())
export default function NewMember() {
    return (
        <div className={styles.container}>
            <EmptyList list={memberArray} description='Este beneficiário ainda não possui integrantes cadastrados.' />

            {!!memberArray.length &&
                <div className={styles.action}>
                    <AddButton label='Adicionar Integrante' />
                </div>}
            {memberArray.map((member) =>
                <div key={member} className={styles.item}>
                    <MemberCard />
                </div>
            )}
        </div>
    )
}
