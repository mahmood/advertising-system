import React, { Component } from 'react';
import { Grid, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class AdminLayout extends Component {
  render() {
    return (
      <div className="rtl">
        <Grid>
          <Grid.Row>
            <Grid.Column computer={3}>
              <aside className="sidebar">
                <header className="sidebar__title">
                  پنل مدیریت دیوار
                </header>
                <span className="sidebar__category">عمومی</span>
                <nav className="sidebar__nav">
                  <ul>
                    <li><Link to="/admin"><Icon name="dashboard" size="large" /> داشبورد</Link></li>
                    <li><Link to="/admin/ads"><Icon name="block layout" size="large" /> آگهی ها</Link></li>
                    <li><a href="#"><Icon name="users" size="large" /> کاربران</a></li>
                    <li><a href="#"><Icon name="setting" size="large" /> تنظیمات</a></li>
                    <li><Link to="/"><Icon name="computer" size="large" /> نمایش سایت</Link></li>
                  </ul>
                </nav>
              </aside>
            </Grid.Column>
            <Grid.Column computer={13} className="grid__main">
              <main className="main">
                <section className="main__header">
                  هدر
                </section>
                <section className="main__inner">
                  {this.props.children}
                </section>
              </main>
            </Grid.Column>
          </Grid.Row> 
        </Grid>
      </div>
    );
  }
}

export default AdminLayout;