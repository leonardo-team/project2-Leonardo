import { FC } from 'react';
import '../assets/css/custom.css';

export type ContentProps = {
    statistic:
  {planned?: number;
  completed?: number;
  canceled?: number;},
};

export const Content: FC<ContentProps> = ({ statistic })=>{
  return (
    <div className="Content">
        <div className='row'>
            <div className='col l3 s6'>
                <div className='small-box bg-green'>
                    <div className='inner'>
                        <h3>{statistic.completed}</h3>
                        <p>Проведенных мероприятий</p>
                    </div>
                    <div className='icon'>
                        <i className='fas fa-sign-language'></i>
                    </div>
                    <a href='#' className='small-box-footer animsition-link'>More info
                        <i className='fa fa-arrow-circle-down'></i>
                    </a>
                </div>
            </div>

            <div className='col l3 s6'>
                <div className='small-box bg-yellow'>
                    <div className='inner'>
                        <h3>{ statistic.planned }</h3>
                        <p>Предстоящих мероприятий</p>
                    </div>
                    <div className='icon'>
                        <i className='far fa-calendar-check'></i>
                    </div>
                    <a href='#' className='small-box-footer animsition-link'>More info
                        <i className='fa fa-arrow-circle-down'></i>
                    </a>
                </div>
            </div>

            <div className='col l3 s6'>
                <div className='small-box bg-red'>
                    <div className='inner'>
                        <h3>{statistic.canceled}</h3>
                        <p>Отмененных мероприятий</p>
                    </div>
                    <div className='icon'>
                        <i className='fas fa-microphone-alt-slash'></i>
                    </div>
                    <a href='#' className='small-box-footer animsition-link'>More info
                        <i className='fa fa-arrow-circle-down'></i>
                    </a>
                </div>
            </div>

            <div className='col l3 s6'>
                <div className='small-box bg-aqua'>
                    <div className='inner'>
                        <h3>Тут сумма всех событий но я не сообразил как это сделать</h3>
                        <p>Всего мероприятий</p>
                    </div>
                    <div className='icon'>
                        <i className="fas fa-chart-pie"></i>
                    </div>
                    <a href='#' className='small-box-footer animsition-link'>
                        More info
                        <i className='fa fa-arrow-circle-down'></i>
                    </a>
                </div>
            </div>
        </div>

        <div className='row'>
            <div className='container'>
                <h3 className='center-align'>Сюда будем выводить список событий</h3>
                <div className='custom-responsive'>
                    <table className='striped hover centered'>
                        <thead>
                            <tr>
                                <th>Название</th>
                                <th>Дата проведения</th>
                                <th>Реализовано билетов</th>
                                <th>Статус</th>
                                <th>Редактировать / Удалить</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>First happening</td>
                                <td>2021-12-29 23:14</td>
                                <td>25</td>
                                <td><i className='text-green material-icons green-item'>check</i></td>
                                <td>
                                    <div className='btn-toolbar'>
                                        <a href='#'>
                                            <button className='btn green' type='submit'>
                                                <a href='eventdetails.html'>
                                                    <i className='material-icons'>done</i>
                                                </a>
                                            </button>
                                        </a>
                                        <a href='#'>
                                            <button className='btn red' type='submit'>
                                                <i className='material-icons'>remove</i>
                                            </button>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Second happening</td>
                                <td>2021-12-29 23:14</td>
                                <td>34</td>
                                <td>
                                    <i className='text-green material-icons green-item'>check</i>
                                </td>
                                <td>
                                    <div className='btn-toolbar'>
                                        <a href='#'>
                                            <button className='btn green' type='submit'>
                                                <a href='eventdetails.html'>
                                                    <i className='material-icons'>done</i>
                                                </a>
                                            </button>
                                        </a>
                                        <a href='#'>
                                            <button className='btn red' type='submit'>
                                                <i className='material-icons'>remove</i>
                                            </button>
                                        </a>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>Third happening</td>
                                <td>2021-12-29 23:14</td>
                                <td>46</td>
                                <td><i className='text-red material-icons pink-item'>close</i></td>
                                <td>
                                    <div className='btn-toolbar'>
                                        <a href='#'>
                                            <button className='btn green' type='submit'>
                                                <a href='eventdetails.html'>
                                                    <i className='material-icons'>done</i>
                                                </a>
                                            </button>
                                        </a>
                                        <a href='#'>
                                            <button className='btn red' type='submit'>
                                                <i className='material-icons'>remove</i>
                                            </button>
                                        </a>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>Fourth happening</td>
                                <td>2021-12-29 23:14</td>
                                <td>48</td>
                                <td><i className='fas fa-hourglass-half green-item'></i></td>
                                <td>
                                    <div className='btn-toolbar'>
                                        <a href='#'>
                                            <button className='btn green' type='submit'>
                                                <a href='eventdetails.html'>
                                                    <i className='material-icons'>done</i>
                                                </a>
                                            </button>
                                        </a>
                                        <a href='#'>
                                            <button className='btn red' type='submit'>
                                                <i className='material-icons'>remove</i>
                                            </button>
                                        </a>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>Fifth happening</td>
                                <td>2021-12-29 23:14</td>
                                <td>48</td>
                                <td><i className='text-green material-icons green-item'>check</i></td>
                                <td>
                                    <div className='btn-toolbar'>
                                        <a href='#'>
                                            <button className='btn green' type='submit'>
                                                <a href='eventdetails.html'>
                                                    <i className='material-icons'>done</i>
                                                </a>
                                            </button>
                                        </a>
                                        <a href='#'>
                                            <button className='btn red' type='submit'>
                                                <i className='material-icons'>remove</i>
                                            </button>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  );
};
