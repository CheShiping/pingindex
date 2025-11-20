<script setup lang="ts">
import { ref } from 'vue'

interface TeamMember {
  id: number
  name: string
  role: string
}

const teamMembers = ref<TeamMember[]>([
  { id: 1, name: '张三', role: '项目经理' },
  { id: 2, name: '李四', role: '前端开发工程师' },
  { id: 3, name: '王五', role: '后端开发工程师' },
  { id: 4, name: '赵六', role: 'UI设计师' }
])

const companyInfo = {
  name: 'PingIndex',
  founded: 2020,
  mission: '为用户提供最优质的网络服务'
}
</script>

<template>
  <div class="about">
    <h1>关于我们</h1>
    
    <section class="company-info">
      <h2>公司信息</h2>
      <p><strong>公司名称:</strong> {{ companyInfo.name }}</p>
      <p><strong>成立时间:</strong> {{ companyInfo.founded }}</p>
      <p><strong>使命:</strong> {{ companyInfo.mission }}</p>
    </section>

    <section class="team">
      <h2>我们的团队</h2>
      <div class="team-grid">
        <div 
          v-for="member in teamMembers" 
          :key="member.id" 
          class="team-member"
        >
          <h3>{{ member.name }}</h3>
          <p>{{ member.role }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.company-info,
.team {
  margin-bottom: 2rem;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.team-member {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.team-member h3 {
  margin: 0 0 0.5rem 0;
  color: #333;
}

.team-member p {
  margin: 0;
  color: #666;
}

h1, h2 {
  color: #333;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
}

h2 {
  border-bottom: 2px solid #409eff;
  padding-bottom: 0.5rem;
}
</style>