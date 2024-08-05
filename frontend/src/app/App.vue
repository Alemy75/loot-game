<script setup>
import { useTheme } from './theme'
import { GDialog } from '@/shared/ui'
import { ref, onMounted, nextTick } from 'vue'

import HeaderWidget from '../widgets/header/header.vue'
import NavigationWidget from '../widgets/navigation/navigation.vue'

useTheme()

const isDialogVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isDialogVisible.value = true
  }, 1000)
})
</script>

<template>
  <div>
    <header-widget />

    <div class="container">
      <router-view />
    </div>

    <navigation-widget />
  </div>

  <g-dialog v-model="isDialogVisible"
    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, dolores
    omnis, ipsa neque consequuntur eos nostrum, alias dolorem libero voluptates
    voluptate porro? Laborum ipsa eius in fugiat soluta optio asperiores
    perferendis est tempore minus maiores nulla, enim omnis cupiditate
    reprehenderit at rerum vel laboriosam deleniti modi error, distinctio sunt
    aliquam? Delectus, labore quibusdam vero consequuntur placeat hic
    accusantium sit ab saepe id obcaecati, rerum ipsa animi dicta maxime error
    magni quaerat explicabo. Deleniti eveniet deserunt atque, cumque magni
    labore ab reiciendis adipisci commodi tempore quaerat laboriosam, suscipit
    molestias amet ea porro non distinctio quas dignissimos. Iste nobis officia
    necessitatibus qui labore harum nemo sunt placeat facilis laudantium! Modi,
    neque. Molestias ipsam ut voluptas quo est adipisci ex ducimus nemo quos
    dolor eligendi ea blanditiis eos deserunt officiis libero error aliquid
    nulla voluptates, ipsa quibusdam repellendus suscipit obcaecati nostrum.
    Dolore sunt, deleniti itaque cum quasi magnam cupiditate! Sapiente, nesciunt
    consequatur! Maiores corrupti fugit provident ullam nostrum repellat eveniet
    est quod placeat. Repellat dolores asperiores dignissimos deserunt,
    quibusdam illum labore voluptate officiis provident eos laborum libero ipsam
    ex explicabo voluptatibus pariatur? Dolore, neque. Mollitia quae impedit ad
    necessitatibus, quos exercitationem assumenda aspernatur odit architecto rem
    ut possimus ipsum aut cumque illo facere molestiae id dolore explicabo sint
    veritatis nam. Officia tenetur eligendi quae obcaecati. Ea dolores qui
    voluptate, saepe placeat neque mollitia molestias expedita eum eligendi ex
    fugiat! Cupiditate, accusamus officia sequi ratione, modi nam quis minima
    pariatur deleniti dolorem repudiandae sed provident numquam obcaecati quos
    rem expedita aliquid eveniet labore perspiciatis culpa dolores. Molestias
    eum nesciunt consequatur eaque iusto, earum dolorem, ab vero placeat vitae
    sed dolor aperiam atque nobis id saepe sit adipisci consectetur molestiae ut
    dignissimos officiis maiores cum enim! Culpa aspernatur iure nobis similique
    excepturi error perferendis modi adipisci, hic ipsum aliquam natus molestias
    maiores. Dolore fugit neque iure minima nostrum numquam atque laborum ad
    impedit laudantium placeat tempora natus porro, sapiente dolor perspiciatis
    temporibus. Aperiam omnis quod itaque voluptatum ab, consectetur
    reprehenderit temporibus quae a ratione, porro, dolorem quia facere
    aspernatur? Fuga odio laboriosam suscipit facilis saepe, beatae ex iste.
    Debitis magnam blanditiis numquam animi incidunt. Quis consequatur ipsam,
    quaerat recusandae itaque quasi ea soluta quisquam, laudantium maiores
    aspernatur doloribus quo sit dolores ab ducimus numquam tenetur voluptates?
    Fugiat, rerum error. Officiis, earum nostrum? Sequi asperiores ratione
    labore facere ducimus facilis minima alias illo neque amet, obcaecati
    doloremque. Reiciendis sunt quos iure dolorum nulla doloremque, impedit
    magnam omnis quas placeat tempora! Et omnis, ratione, facere esse earum
    asperiores pariatur accusamus unde dolor a hic veniam deleniti atque neque
    aspernatur voluptatum dignissimos provident corrupti perferendis in dolorem.
    Excepturi, tempora consequatur magnam dolore distinctio similique nisi esse
    vel nihil quo. Possimus, unde. Nostrum autem maxime cum modi facere nihil.
    Temporibus qui optio magnam maxime perspiciatis eius voluptatum soluta esse
    necessitatibus culpa eos velit delectus vero, tempora libero, porro
    dignissimos eum ipsam. Totam sunt in ea illo ex nam placeat, qui ducimus
    repellat, praesentium excepturi nesciunt maxime ratione sit quis, porro
    dolor autem dolores! Dolorum ratione, ipsum quasi maiores hic expedita quis
    architecto tempore veritatis ut obcaecati id! Veniam deserunt animi quisquam
    sed accusamus minima. Ad voluptatem vitae voluptatibus possimus, accusantium
    obcaecati aliquam corrupti, nisi odit aperiam minus maxime saepe dignissimos
    fuga hic. Adipisci delectus porro libero quisquam, dicta consectetur nam
    placeat magni hic culpa eveniet architecto aspernatur provident aliquid a
    quod. Qui dolor unde debitis sed voluptatibus vitae cumque consequuntur? Ad
    cum praesentium adipisci asperiores odit veniam tempora. Debitis
    exercitationem quam veritatis officiis iste velit sit ab nesciunt dolorem,
    dicta non. Repellendus asperiores excepturi laudantium eos ratione magni
    cumque odio iure quaerat ut similique, dolore deserunt autem aliquam, nemo
    explicabo doloribus eum, voluptatum eaque nesciunt facere? Neque ipsam
    repellat temporibus molestiae itaque nisi architecto ex eveniet repellendus
    modi error excepturi, distinctio recusandae deserunt nam! Consequatur est
    unde explicabo ducimus asperiores quos maiores commodi? Enim et placeat
    eaque vitae explicabo molestiae nostrum eveniet sit similique nam sequi
    maiores illum fuga eos, labore alias dignissimos quaerat. Expedita
    voluptates inventore odit autem magni aliquid et assumenda laudantium
    eveniet, maiores incidunt debitis commodi saepe non reiciendis animi magnam
    esse! Eligendi, nulla, cupiditate ab recusandae dolor non amet minus,
    dolores ea reprehenderit at nihil perspiciatis quas sed provident dolorem.
    Amet porro deserunt magnam debitis molestias vel, animi necessitatibus
    magni? Porro, cupiditate. Consequatur dolores perspiciatis doloribus unde
    corporis optio sunt, voluptatibus ut nemo ex ea at illum officiis ratione
    tenetur vero minima in vel voluptates ullam hic quisquam? Minima commodi
    error cumque iure alias! Minus repellat tenetur illum consequatur et
    possimus, optio harum neque recusandae? Blanditiis consectetur aut repellat
    nulla voluptatum. Deserunt quia doloremque eos fugit commodi, dolore
    temporibus quaerat excepturi accusamus vero alias dolorem inventore eum
    molestias natus sed necessitatibus soluta. Labore maxime provident incidunt
    dolor vel delectus sed nesciunt dolores magni, blanditiis quaerat facilis,
    corporis quibusdam reiciendis repellendus! Veniam nesciunt impedit quos modi
    assumenda, eligendi aliquid harum labore perferendis rem facilis quod sit
    minima ipsa corporis, dicta architecto ullam expedita odio velit? Eligendi
    dolorem alias quis odio soluta quidem nam itaque quaerat ut eius, cupiditate
    rerum facilis esse cum temporibus, accusantium at atque placeat corporis.
    Similique expedita cumque eos odio adipisci facilis quibusdam fugit id!
    Ratione ab dolore quaerat hic nostrum rerum eius, ipsa alias saepe officia
    molestias, consequuntur animi excepturi quod sed harum sit! Ad sint pariatur
    libero accusamus quidem quo consequatur vel! Dolorem voluptas nobis placeat,
    nihil error, doloremque inventore incidunt ad eum nam ex in magni similique
    dignissimos quisquam corrupti nesciunt labore architecto nulla quibusdam
    fuga dolor earum quam? Molestiae, cum aliquid nostrum saepe culpa nulla,
    maiores deserunt adipisci alias optio unde fuga aut, odit vitae nisi totam
    rem reiciendis libero dolores at odio esse? Tenetur dolore exercitationem
    labore ut quae fugit maiores nihil suscipit alias? Amet rerum fugiat
    debitis! Temporibus explicabo dicta, voluptatum laborum reprehenderit amet
    totam! Animi voluptas labore non quas explicabo minima, praesentium ea.
    Eaque fugiat deserunt temporibus enim. Nisi placeat repellendus aperiam
    commodi soluta quas culpa, delectus voluptas laudantium inventore
    necessitatibus voluptatibus ab veniam doloremque eius corrupti nobis
    reiciendis tempora alias fugit accusantium velit corporis dolores.</g-dialog
  >
</template>

<style scoped></style>
